import { PersonType } from '../enum/person-type.enum';
import mongoose, { Document } from 'mongoose';
import { Schema } from '../../../modules/helpers/schema.helper';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema("EcomerceProducts")
export class EcommerceProducts extends Document{
    @Prop()
    name: string;

    @Prop()
    active: boolean;

    @Prop()
    description: string;

    @Prop()
    category: string;

    @Prop()
    price: string;

    @Prop()
    quantity: number;

    @Prop()
    imageUrl: string;
}

export const EcommerceProductsSchema = SchemaFactory.createForClass(EcommerceProducts);