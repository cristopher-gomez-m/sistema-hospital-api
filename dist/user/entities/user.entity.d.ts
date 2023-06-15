import { Cita } from '../../cita/entities/cita.entity';
import { HistorialClinico } from '../../historial-clinico/entities/historial-clinico.entity';
import { Rol } from '../../rol/rol.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    rol: Rol;
    nombre: string;
    apellido: string;
    cedula: string;
    direccion: string;
    historial_clinico: HistorialClinico;
    citas: Cita[];
}
