import { CreateUserDto } from './dto/register-user.dto';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { HistorialClinicoService } from 'src/historial-clinico/historial-clinico.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateMedicoDto } from '../medicos/dto/update-medico.dto';
export declare class UserService {
    private userRepository;
    private historialService;
    constructor(userRepository: UserRepository, historialService: HistorialClinicoService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findByUsername(email: string): Promise<User[]>;
    findById(id: number): Promise<User>;
    findMedicoById(id: number): Promise<User>;
    findAllPacientes(): Promise<User[]>;
    findAllMedicos(): Promise<User[]>;
    findUsuariosSinConsultorio(consultorioIds: number[]): Promise<User[]>;
    findOneByUsername(email: string): Promise<User>;
    remove(id: number): Promise<void>;
    updateNombreYApellido(user_id: number, updateUserDto: UpdateUserDto): Promise<User>;
    updateMedico(id: number, updateMedicoDto: UpdateMedicoDto): Promise<import("typeorm").UpdateResult>;
}
