import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DocumentHelper } from 'src/modules/helpers/document.helper';
import { IException } from 'src/modules/helpers/exception-builder.model';
import { UserAuthentication } from '../dto/user-authentication.dto';
import { UserBuilderDto } from '../dto/user-builder.dto';
import { User } from '../dto/user.dto';
import { userRegistrationRepository } from '../repository/user-registration.repository';

@Injectable()
export class UserRegistrationService {
  constructor(
    private readonly userRegistrationRepository: userRegistrationRepository,
  ) {}

  public async findUserByDocument(document: string): Promise<User> {
    try {
      DocumentHelper.isValid(document);

      return await this.userRegistrationRepository.findByDocument(document);
    } catch (error) {
      throw IException.ofValidation(
        'USER_NOT_FOUND',
        'Usuário não encontrado.',
      );
    }
  }

  public async createUser(
    userAuthentication: UserAuthentication,
  ): Promise<User> {
    const user: User = new UserBuilderDto()
      .withName(userAuthentication.user.name)
      .withEmail(userAuthentication.user.email)
      .withMobilePhone(userAuthentication.user.mobilePhone)
      .withDocument(userAuthentication.user.document)
      .withPersonType(userAuthentication.user.document)
      .build();

    try {
      await this.userRegistrationRepository.create(user);
    } catch (error) {
      throw IException.ofValidation(
        'CREATE_USER_ERROR',
        'Ocorreu um erro ao criar usuário.',
      );
    }

    return user;
  }
}
