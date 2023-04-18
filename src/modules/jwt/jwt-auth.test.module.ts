import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtAuthService } from './services/jwt-auth-service';
import { UserPrincipal } from './models/user-principal';

const jwtStrategyMock = {
  validate: async (payload: UserPrincipal): Promise<UserPrincipal> => {
    return {
      ...payload,
    } as UserPrincipal;
  },
};

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'test-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    { provide: JwtStrategy, useValue: jwtStrategyMock },
    JwtAuthService,
  ],
  exports: [JwtAuthService],
})
export class JwtAuthTestModule {}
