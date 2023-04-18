import { Injectable, Logger } from '@nestjs/common';
import { IException } from 'src/modules/helpers/exception-builder.model';
import { JwtAuthService } from 'src/modules/jwt/services/jwt-auth-service';
import { UserAuthentication } from '../dto/user-authentication.dto';
import { UserCreationDto } from '../dto/user-creation.dto';
import { User } from '../dto/user.dto';
import { UserRegistrationService } from './user-registration.service';

@Injectable()
export class UserAuthenticationService {
  constructor(
    private readonly jwtAuthService: JwtAuthService,
    private readonly userRegistrationService: UserRegistrationService,
  ) {}

  public async userAuthentication(user: UserAuthentication): Promise<any> {
    if (user == null) {
      throw IException.ofValidation('USER_INVALID', 'Usuário inválido');
    }

    UserAuthentication.validate(user);

    const accessToken = {
      accessToken: this.jwtAuthService.createAccessToken(user),
    };

    return accessToken;
  }

  public async findRegistrationOrCreateUser(accessToken: string): Promise<any> {
    const userCreation = this.jwtAuthService.decode(
      accessToken,
    ) as UserAuthentication;

    if (!userCreation) {
      throw IException.ofValidation('USER_INVALID', 'Usuário inválido.');
    }

    UserAuthentication.validate(userCreation);

    let user: UserCreationDto;

    try {
      user = await this.findOrRegistrationUser(userCreation);
    } catch (error) {
      throw IException.ofValidation(
        'FIND_OR_CREATION_USER_ERROR',
        'Ocorreu um errro ao validar usuário.',
      );
    }
  }

  public async findOrRegistrationUser(
    userAuthentication: UserAuthentication,
  ): Promise<UserCreationDto> {
    let user: User = await this.userRegistrationService.findUserByDocument(
      userAuthentication.user.document,
    );

    if (!user || !user._id) {
      try {
        user = await this.userRegistrationService.createUser(
          userAuthentication,
        );
      } catch (error) {
        Logger.error(
          `Ocorreu um erro ao registrar usuário, tente novamente: ${error.message}`,
        );
      }
    }

    return UserCreationDto.of(user._id, user?.FirstAccess);
  }
}
