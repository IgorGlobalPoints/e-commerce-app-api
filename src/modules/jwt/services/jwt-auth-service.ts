import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IException } from 'src/modules/helpers/exception-builder.model';

@Injectable()
export class JwtAuthService {
  private readonly logger = new Logger(JwtAuthService.name);

  constructor(private readonly jwtService: JwtService) {}

  public create(payload: any): string {
    try {
      return this.jwtService.sign(payload);
    } catch (error) {
      this.logger.error(
        `Ocorreu um erro ao criar token de autenticação: ${error.message}`,
      );
      throw IException.ofError(
        'ERROR_CREATING_TOKEN',
        'Erro durante a criação do token',
      );
    }
  }

  public createAccessToken(payload: any): string {
    try {
      return this.jwtService.sign(payload);
    } catch (error) {
      this.logger.error(
        `Ocorreu um erro ao criar token de acesso: ${error.message}`,
      );
      throw IException.ofError(
        'ERROR_CREATING_TOKEN',
        'Erro durante a criação do token',
      );
    }
  }

  public decode(accessToken: string) {
    try {
      return this.jwtService.verify(accessToken);
    } catch (error) {
      this.logger.error(
        `Ocorreu um erro ao decodificar token de autenticação: ${error.message}`,
      );
      throw IException.ofError(
        'ERROR_DECODE_TOKEN',
        'Erro durante a decodificar do token',
      );
    }
  }
}
