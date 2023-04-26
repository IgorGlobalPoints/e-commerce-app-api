import { User } from './user.dto';
import { v4 } from 'uuid';
import { PersonType } from '../enum/person-type.enum';
import { DocumentHelper } from '../../../modules/helpers/document.helper';

export class UserBuilderDto {
  user: User;

  constructor() {
    this.user = {} as User;
    this.user._id = v4();
    this.user.active = true;
    this.user.createDate = new Date();
  }

  public withName(name: string): UserBuilderDto {
    this.user.name = name;
    return this;
  }

  public withEmail(email: string): UserBuilderDto {
    this.user.email = email;
    return this;
  }

  public withMobilePhone(mobilePhone: string): UserBuilderDto {
    this.user.mobilePhone = mobilePhone;
    return this;
  }

  public withPersonType(document: string): UserBuilderDto {
    this.user.type = DocumentHelper.personTypeFromDocument(document);
    return this;
  }

  public withDocument(document: string): UserBuilderDto {
    this.user.document = document;

    if (this.user.type === PersonType.Fisica) {
      this.user.cpf = document;
    } else if (this.user.type === PersonType.Juridica) {
      this.user.cnpj = document;
    }

    return this;
  }

  public build(): User {
    return this.user;
  }
}
