import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { UserService } from '../user/user.service';
export declare class MedicosService {
    private userService;
    constructor(userService: UserService);
    create(createMedicoDto: CreateMedicoDto): Promise<import("../user/entities/user.entity").User>;
    findAll(): Promise<import("../user/entities/user.entity").User[]>;
    findOne(id: number): Promise<import("../user/entities/user.entity").User>;
    update(id: number, updateMedicoDto: UpdateMedicoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
