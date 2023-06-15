import { Rol } from "../../rol/rol.entity";
export declare class CreateMedicoDto {
    email: string;
    password: string;
    rol: Rol;
    nombre: string;
    cedula: string;
    apellido: string;
    direccion: string;
}
