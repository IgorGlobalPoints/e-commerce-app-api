import { PersonType } from '../enum/person-type.enum';
import mongoose, { Document } from 'mongoose';
import { Schema } from '../../../modules/helpers/schema.helper';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema('User')
export class User extends Document {
  @Prop(mongoose.Schema.Types.UUID)
  _id: string;

  @Prop()
  CreateDate: Date;

  @Prop()
  UpdateDate: Date;

  @Prop()
  Active: boolean;

  @Prop()
  Name: string;

  @Prop()
  Email: string;

  @Prop()
  MobilePhone: string;

  @Prop()
  Cpf: string;

  @Prop()
  Cnpj: string;

  @Prop()
  Document: string;

  @Prop()
  Type: PersonType;

  @Prop()
  FirstAccess: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
