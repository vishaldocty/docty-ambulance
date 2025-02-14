import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('DoctyAmbulance')
      .setDescription('Docty')
      .setVersion('1.0')
    //   .addBearerAuth() 
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api', app, document);
  }
}
