import { Module } from '@nestjs/common';
import { ConsultoriosService } from './consultorios.service';
import { ConsultoriosController } from './consultorios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultorio } from './entities/consultorio.entity';
import { UserRepository } from '../user/user.repository';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
@Module({
  imports:[TypeOrmModule.forFeature([Consultorio,User])],
  controllers: [ConsultoriosController],
  providers: [ConsultoriosService,UserService,UserRepository]
})
export class ConsultoriosModule {}
