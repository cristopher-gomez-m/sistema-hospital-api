import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultorioDto } from './create-consultorio.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateConsultorioDto  {
    @IsNotEmpty({message:"La especialidad no debe estar vacia"})
    especialidad: string;
    @IsNotEmpty({message:"El medico no debe estar vacio"})
    medico_id: number;
}
