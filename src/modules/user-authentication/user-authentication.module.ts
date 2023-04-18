import { Module } from '@nestjs/common/decorators';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import IMongooseConection from '../helpers/mongoose-conection.helper';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { UserAuthenticationController } from './controller/user-authentication.controller';
import { User, UserSchema } from './dto/user.dto';
import { userRegistrationRepository } from './repository/user-registration.repository';
import { UserAuthenticationService } from './service/user-authentication.service';
import { UserRegistrationService } from './service/user-registration.service';

const MODELS = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);

@Module({
  imports: [
    MODELS,
    IMongooseConection,
    ConfigModule.forRoot({}),
    JwtAuthModule,
  ],
  providers: [
    UserAuthenticationController,
    UserAuthenticationService,
    UserRegistrationService,
    userRegistrationRepository,
  ],
  controllers: [UserAuthenticationController],
  exports: [],
})
export class UserAuthenticationModule {}
