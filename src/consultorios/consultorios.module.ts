import { Module } from '@nestjs/common';
import { ConsultoriosService } from './consultorios.service';
import { ConsultoriosController } from './consultorios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultorio } from './entities/consultorio.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Consultorio])],
  controllers: [ConsultoriosController],
  providers: [ConsultoriosService]
})
export class ConsultoriosModule {}
