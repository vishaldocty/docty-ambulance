import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.dev', 
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get<string>('MONGO_USER')}:${configService.get<string>('MONGO_PASSWORD')}@${configService.get<string>('MONGO_HOST_NAME')}/${configService.get<string>('MONGO_DATABASE_NAME')}`,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoConfigModule {
  private static readonly logger = new Logger(MongoConfigModule.name);

 
}
