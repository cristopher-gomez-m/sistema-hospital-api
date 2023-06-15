import { ConsultoriosService } from './consultorios.service';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';
export declare class ConsultoriosController {
    private readonly consultoriosService;
    constructor(consultoriosService: ConsultoriosService);
    create(createConsultorioDto: CreateConsultorioDto): Promise<import("./entities/consultorio.entity").Consultorio>;
    findAllNamesMedicos(): Promise<import("../user/entities/user.entity").User[]>;
    findAll(): Promise<import("./entities/consultorio.entity").Consultorio[]>;
    findOne(id: string): Promise<{
        medico: {
            password: any;
            id: number;
            email: string;
            rol: import("../rol/rol.entity").Rol;
            nombre: string;
            apellido: string;
            cedula: string;
            direccion: string;
            historial_clinico: import("../historial-clinico/entities/historial-clinico.entity").HistorialClinico;
            citas: import("../cita/entities/cita.entity").Cita[];
        };
        id: number;
        especialidad: string;
        citas: import("../cita/entities/cita.entity").Cita[];
    }>;
    update(id: string, updateConsultorioDto: UpdateConsultorioDto): Promise<import("./entities/consultorio.entity").Consultorio>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
