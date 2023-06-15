import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Cita } from './entities/cita.entity';
import { Repository } from 'typeorm';
import { Consultorio } from 'src/consultorios/entities/consultorio.entity';
import { User } from 'src/user/entities/user.entity';
export declare class CitaService {
    private citaRepository;
    private userRepository;
    private consultorioRepository;
    constructor(citaRepository: Repository<Cita>, userRepository: Repository<User>, consultorioRepository: Repository<Consultorio>);
    create(createCitaDto: CreateCitaDto): Promise<Cita>;
    findAllById(userId: number): Promise<Cita[]>;
    findLastOne(userId: number): Promise<Cita[]>;
    update(id: number, updateCitaDto: UpdateCitaDto): string;
    remove(id: number): string;
}
