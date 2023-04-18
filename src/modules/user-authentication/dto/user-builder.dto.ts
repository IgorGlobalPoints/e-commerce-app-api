import { User } from './user.dto';
import { v4 } from 'uuid';
import { PersonType } from '../enum/person-type.enum';
import { DocumentHelper } from '../../../modules/helpers/document.helper';

export class UserBuilderDto {
  user: User;

  constructor() {
    this.user = {} as User;
    this.user._id = v4();
    this.user.Active = true;
    this.user.CreateDate = new Date();
  }

  public withName(name: string): UserBuilderDto {
    this.user.Name = name;
    return this;
  }

  public withEmail(email: string): UserBuilderDto {
    this.user.Email = email;
    return this;
  }

  public withMobilePhone(mobilePhone: string): UserBuilderDto {
    this.user.MobilePhone = mobilePhone;
    return this;
  }

  public withPersonType(document: string): UserBuilderDto {
    this.user.Type = DocumentHelper.personTypeFromDocument(document);
    return this;
  }

  public withDocument(document: string): UserBuilderDto {
    this.user.Document = document;

    if (this.user.Type === PersonType.Fisica) {
      this.user.Cpf = document;
    } else if (this.user.Type === PersonType.Juridica) {
      this.user.Cnpj = document;
    }

    return this;
  }

  public build(): User {
    return this.user;
  }
}
