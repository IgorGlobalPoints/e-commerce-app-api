import { IException } from 'src/modules/helpers/exception-builder.model';
import { isNullOrEmpty } from '../../../modules/helpers/validator-functions.helper';

export class UserPrincipal {
  userId: string;

  public static validate(userPrincipal: UserPrincipal) {
    if (isNullOrEmpty(userPrincipal.userId))
      throw IException.ofValidation('USER_INVALID', 'Usuário inválido.');
  }
}
