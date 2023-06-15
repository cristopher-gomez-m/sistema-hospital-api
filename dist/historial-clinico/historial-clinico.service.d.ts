import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { HistorialClinico } from './entities/historial-clinico.entity';
import { HistorialClinicoRepository } from './historial-clinico.repository';
export declare class HistorialClinicoService {
    private historialRepository;
    constructor(historialRepository: HistorialClinicoRepository);
    create(createHistorialClinicoDto: CreateHistorialClinicoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatedData: Partial<HistorialClinico>): Promise<HistorialClinico>;
    remove(id: number): Promise<HistorialClinico>;
    save(historial: CreateHistorialClinicoDto): Promise<void>;
}
