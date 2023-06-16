import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { User } from 'src/user/entities/user.entity';
export declare class MedicosController {
    private readonly medicosService;
    constructor(medicosService: MedicosService);
    create(createMedicoDto: CreateMedicoDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateConsultorioDto: UpdateMedicoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
