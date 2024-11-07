import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      }, 
      consumer:{
        groupId: 'llmservice-consumer'
      }
    }
  });

  //await app.listen(process.env.PORT ?? 3000);
  await app.listen();
}
bootstrap();