import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongoConfigModule } from '@app/common';
import { DriverController } from './app/api/driver/driver.controller';
import { DriverService } from './app/api/driver/driver.service';
import { DriverModule } from './app/api/driver/driver.module';
import { OperatorController } from './app/api/operator/operator.controller';
import { OperatorService } from './app/api/operator/operator.service';
import { OperatorModule } from './app/api/operator/operator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.dev', 
      isGlobal: true, 
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MongoConfigModule,
    DriverModule,
    OperatorModule,
  ],
  controllers: [AppController, DriverController, OperatorController],
  providers: [AppService, DriverService, OperatorService],
})
export class AppModule {}
