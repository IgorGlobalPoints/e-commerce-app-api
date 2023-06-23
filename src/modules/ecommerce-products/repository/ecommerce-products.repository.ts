import { Injectable } from '@nestjs/common'
import { EcommerceProducts } from '../schemas/ecommerce-products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EcommerceProductsRepository {
    constructor(@InjectModel(EcommerceProducts.name) private readonly model: Model<EcommerceProducts>) {}

    async findProducts(): Promise<EcommerceProducts> {
        return await this.model.find({ active: true });
    }

}
