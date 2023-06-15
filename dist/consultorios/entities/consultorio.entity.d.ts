import { Cita } from "src/cita/entities/cita.entity";
import { User } from "../../user/entities/user.entity";
export declare class Consultorio {
    id: number;
    especialidad: string;
    medico: User;
    citas: Cita[];
}
