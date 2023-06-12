import { Module } from '@nestjs/common';
import { HistorialClinicoService } from './historial-clinico.service';
import { HistorialClinicoController } from './historial-clinico.controller';
import { HistorialClinico } from './entities/historial-clinico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialClinicoRepository } from './historial-clinico.repository';
import { UserService } from 'src/user/user.service';
import { UserRepository } from 'src/user/user.repository';
import { User } from 'src/user/entities/user.entity';


@Module({
  imports:[TypeOrmModule.forFeature([HistorialClinico])],
  controllers: [HistorialClinicoController],
  providers: [HistorialClinicoService,HistorialClinicoRepository]
})
export class HistorialClinicoModule {}
