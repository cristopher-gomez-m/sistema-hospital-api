"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialClinicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const historial_clinico_entity_1 = require("./entities/historial-clinico.entity");
const historial_clinico_repository_1 = require("./historial-clinico.repository");
let HistorialClinicoService = exports.HistorialClinicoService = class HistorialClinicoService {
    constructor(historialRepository) {
        this.historialRepository = historialRepository;
    }
    create(createHistorialClinicoDto) {
        return 'This action adds a new historialClinico';
    }
    findAll() {
        return `This action returns all historialClinico`;
    }
    findOne(id) {
        return `This action returns a #${id} historialClinico`;
    }
    async update(id, updatedData) {
        const historialClinico = await this.historialRepository.findOne({
            where: { id }
        });
        if (!historialClinico) {
            throw new common_1.NotFoundException('Historial clínico no encontrado');
        }
        Object.assign(historialClinico, updatedData);
        return this.historialRepository.save(historialClinico);
    }
    async remove(id) {
        const historialClinico = await this.historialRepository.findOne({
            where: { id }
        });
        if (!historialClinico) {
            throw new common_1.NotFoundException('Historial clínico no encontrado');
        }
        return this.historialRepository.remove(historialClinico);
    }
    async save(historial) {
        await this.historialRepository.save(historial);
    }
};
exports.HistorialClinicoService = HistorialClinicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(historial_clinico_entity_1.HistorialClinico)),
    __metadata("design:paramtypes", [historial_clinico_repository_1.HistorialClinicoRepository])
], HistorialClinicoService);
//# sourceMappingURL=historial-clinico.service.js.map