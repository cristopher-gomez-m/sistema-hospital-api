import { User } from "src/user/entities/user.entity";
import { Consultorio } from "../../consultorios/entities/consultorio.entity";
export declare class Cita {
    id: number;
    consultorios: Consultorio[];
    fecha: string;
    hora: string;
    user: User;
}
