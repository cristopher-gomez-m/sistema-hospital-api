import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';
import { Consultorio } from './entities/consultorio.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
export declare class ConsultoriosService {
    private consultorioRepository;
    private userService;
    constructor(consultorioRepository: Repository<Consultorio>, userService: UserService);
    create(createConsultorioDto: CreateConsultorioDto): Promise<Consultorio>;
    findAll(): Promise<Consultorio[]>;
    findOne(id: number): Promise<{
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
    update(consultorio_id: number, updateConsultorioDto: UpdateConsultorioDto): Promise<Consultorio>;
    findUsuariosSinConsultorio(): Promise<User[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
