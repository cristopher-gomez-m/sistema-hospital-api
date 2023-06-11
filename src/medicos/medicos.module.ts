import { Module } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { MedicosController } from './medicos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [MedicosController],
  providers: [MedicosService,UserService,UserRepository]
})
export class MedicosModule {}
