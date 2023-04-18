import { Module } from '@nestjs/common';
import { UserAuthenticationModule } from './modules/user-authentication/user-authentication.module';

@Module({
  imports: [UserAuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
