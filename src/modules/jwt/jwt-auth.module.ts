import { Module } from '@nestjs/common';

import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtAuthService } from './services/jwt-auth-service';
require('dotenv').config();

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [JwtStrategy, JwtAuthService],
  exports: [JwtAuthService],
})
export class JwtAuthModule {}
