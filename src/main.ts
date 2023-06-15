import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const corsOptions: CorsOptions = {
    origin: ['https://sistema-hospital.vercel.app','sistema-hospital.vercel.app'], // Reemplaza con la URL de tu aplicación Angular
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };
  app.enableCors(corsOptions);
  


  
  await app.listen(3000);
}
bootstrap();
