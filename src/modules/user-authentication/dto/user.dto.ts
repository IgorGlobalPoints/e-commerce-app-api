import { PersonType } from '../enum/person-type.enum';
import mongoose, { Document } from 'mongoose';
import { Schema } from '../../../modules/helpers/schema.helper';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema('User')
export class User extends Document {
  @Prop(mongoose.Schema.Types.UUID)
  _id: string;

  @Prop()
  createDate: Date;

  @Prop()
  updateDate: Date;

  @Prop()
  active: boolean;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  mobilePhone: string;

  @Prop()
  cpf: string;

  @Prop()
  cnpj: string;

  @Prop()
  document: string;

  @Prop()
  type: PersonType;

  @Prop()
  firstAccess: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
