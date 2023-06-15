import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
export declare class MedicosController {
    private readonly medicosService;
    constructor(medicosService: MedicosService);
    create(createMedicoDto: CreateMedicoDto): Promise<import("../user/entities/user.entity").User>;
    findAll(): Promise<import("../user/entities/user.entity").User[]>;
    findOne(id: string): Promise<import("../user/entities/user.entity").User>;
    update(id: string, updateConsultorioDto: UpdateMedicoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
