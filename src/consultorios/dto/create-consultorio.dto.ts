import { IsNotEmpty } from "class-validator";
import { User } from "../../user/entities/user.entity";
export class CreateConsultorioDto {
    @IsNotEmpty({message:"La especialidad no debe estar vacia"})
    especialidad: string;
    @IsNotEmpty({message:"El medico no debe estar vacio"})
    medico_id: number;
}
