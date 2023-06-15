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
exports.CitaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cita_entity_1 = require("./entities/cita.entity");
const typeorm_2 = require("typeorm");
const consultorio_entity_1 = require("../consultorios/entities/consultorio.entity");
const user_entity_1 = require("../user/entities/user.entity");
let CitaService = exports.CitaService = class CitaService {
    constructor(citaRepository, userRepository, consultorioRepository) {
        this.citaRepository = citaRepository;
        this.userRepository = userRepository;
        this.consultorioRepository = consultorioRepository;
    }
    async create(createCitaDto) {
        const { userId, consultorioId, fecha, hora } = createCitaDto;
        const consultorio = await this.consultorioRepository.findOne({
            where: { id: consultorioId },
        });
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user || !consultorio) {
            throw new common_1.BadRequestException('Usuario o consultorio no encontrado');
        }
        const cita = new cita_entity_1.Cita();
        cita.fecha = fecha;
        cita.user = user;
        cita.hora = hora;
        cita.consultorios = [consultorio];
        return this.citaRepository.save(cita);
    }
    async findAllById(userId) {
        return this.citaRepository.find({
            relations: ['consultorios'],
            where: { user: { id: userId } },
        });
    }
    findLastOne(userId) {
        return this.citaRepository.find({
            relations: ['consultorios'],
            where: { user: { id: userId } },
            order: { id: 'DESC' },
            take: 1,
        });
    }
    update(id, updateCitaDto) {
        return `This action updates a #${id} cita`;
    }
    remove(id) {
        return `This action removes a #${id} cita`;
    }
};
exports.CitaService = CitaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cita_entity_1.Cita)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(consultorio_entity_1.Consultorio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CitaService);
//# sourceMappingURL=cita.service.js.map