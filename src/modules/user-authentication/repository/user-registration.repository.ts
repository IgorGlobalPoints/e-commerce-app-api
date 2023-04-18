import { User } from '../dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class userRegistrationRepository {
  constructor(@InjectModel(User.name) private readonly model: Model<User>) {}

  public async create(user: User): Promise<User> {
    return this.model.create(user);
  }

  public async findByDocument(document: string): Promise<User> {
    return this.model.findOne({
      Document: document,
    });
  }
}
