import { Body, Controller, Post } from '@nestjs/common';
import { UserAuthentication } from '../dto/user-authentication.dto';
import { UserAuthenticationService } from '../service/user-authentication.service';

@Controller('user/authentication')
export class UserAuthenticationController {
  constructor(
    private readonly userAuthenticationService: UserAuthenticationService,
  ) {}

  @Post('/login')
  public async userLoginAuthentication(
    @Body() user: UserAuthentication,
  ): Promise<any> {
    return await this.userAuthenticationService.userAuthentication(user);
  }

  @Post('/verify')
  public async userVerifyAuthentication(
    @Body('accessToken') accessToken: string,
  ): Promise<any> {
    return await this.userAuthenticationService.findRegistrationOrCreateUser(
      accessToken,
    );
  }
}
