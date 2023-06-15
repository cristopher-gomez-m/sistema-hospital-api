import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
export declare class CitaController {
    private readonly citaService;
    constructor(citaService: CitaService);
    create(createCitaDto: CreateCitaDto): Promise<import("./entities/cita.entity").Cita>;
    findAllById(userId: number): Promise<import("./entities/cita.entity").Cita[]>;
    findLastOne(id: string): Promise<import("./entities/cita.entity").Cita[]>;
    update(id: string, updateCitaDto: UpdateCitaDto): string;
    remove(id: string): string;
}
