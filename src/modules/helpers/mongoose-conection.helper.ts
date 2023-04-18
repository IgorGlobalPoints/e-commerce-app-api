import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const IMongooseConection = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    uri: config.get<string>('MONGO_URI'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
});

export default IMongooseConection;
