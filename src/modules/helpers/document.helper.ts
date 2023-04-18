import * as cnpj from '@fnando/cnpj';
import * as cpf from '@fnando/cpf';
import { PersonType } from '../user-authentication/enum/person-type.enum';
import { IException } from './exception-builder.model';

export class DocumentHelper {
  public static personTypeFromDocument(document: string) {
    if (document.length === 11) {
      return PersonType.Fisica;
    }

    if (document.length === 14) {
      return PersonType.Juridica;
    }

    throw IException.ofValidation(
      'DOCUMENT_TYPE_INVALID',
      'Documento Inválido',
    );
  }

  static isValid(document: string) {
    if (document.length === 11) {
      return cpf.isValid(document);
    }

    if (document.length === 14) {
      return cnpj.isValid(document);
    }

    throw IException.ofValidation(
      'DOCUMENT_TYPE_INVALID',
      'Documento Inválido',
    );
  }
}
