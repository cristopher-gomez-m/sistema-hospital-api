import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { RolModule } from './rol/rol.module';
import { Rol } from './rol/rol.entity';
import { ConsultoriosModule } from './consultorios/consultorios.module';
import { Consultorio } from './consultorios/entities/consultorio.entity';
require('dotenv').config();
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
    ssl: process.env.NODE_ENV !== 'development',
  }), UserModule, AuthModule,RolModule, ConsultoriosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
