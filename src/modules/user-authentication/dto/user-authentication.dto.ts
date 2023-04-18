import { IException } from 'src/modules/helpers/exception-builder.model';
import { UserInfo } from './user-info.dto';

export class UserAuthentication {
  user: UserInfo;

  public static validate(userAuthentication: UserAuthentication): void {
    if (!userAuthentication.user.name) {
      throw IException.ofValidation(
        'INVALID_NAME',
        'Nome do usuário deve ser preenchido.',
      );
    }

    if (!userAuthentication.user.document) {
      throw IException.ofValidation(
        'INVALID_DOCUMENT',
        'Documento do usuário deve ser preenchido.',
      );
    }

    if (!userAuthentication.user.email) {
      throw IException.ofValidation(
        'INVALID_EMAIL',
        'Email do usuário deve ser preenchido.',
      );
    }

    if (!userAuthentication.user.mobilePhone) {
      throw IException.ofValidation(
        'INVALID_MOBILE_PHONE',
        'Celular do usuário deve ser preenchido.',
      );
    }

    userAuthentication.user.mobilePhone =
      userAuthentication.user.mobilePhone.replace(/\D/g, '');
    if (userAuthentication.user.mobilePhone.length !== 11) {
      throw IException.ofValidation(
        'INVALID_MOBILE_PHONE',
        'Celular deve ter 11 digitos',
      );
    }
  }
}
