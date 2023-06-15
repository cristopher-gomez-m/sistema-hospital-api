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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultoriosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const consultorio_entity_1 = require("./entities/consultorio.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
let ConsultoriosService = exports.ConsultoriosService = class ConsultoriosService {
    constructor(consultorioRepository, userService) {
        this.consultorioRepository = consultorioRepository;
        this.userService = userService;
    }
    async create(createConsultorioDto) {
        try {
            const id = createConsultorioDto.medico_id;
            const medico = await this.userService.findById(id);
            if (medico.rol.id !== 2) {
                throw new common_1.BadRequestException('Esa cuenta no pertenece a un medico');
            }
            const consultorio = new consultorio_entity_1.Consultorio();
            consultorio.especialidad = createConsultorioDto.especialidad;
            consultorio.medico = medico;
            const newConsultorio = await this.consultorioRepository.save(consultorio);
            return newConsultorio;
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.BadRequestException('El medico ya pertenece a otro consultorio');
            }
        }
    }
    async findAll() {
        const consultorios = await this.consultorioRepository.find({
            relations: ['medico'],
        });
        const consultoriosSinPassword = consultorios.map((consultorio) => {
            const { medico } = consultorio, restoDatos = __rest(consultorio, ["medico"]);
            const medicoSinPassword = Object.assign(Object.assign({}, medico), { password: undefined });
            return Object.assign(Object.assign({}, restoDatos), { medico: medicoSinPassword });
        });
        return consultoriosSinPassword;
    }
    async findOne(id) {
        const consultorios = await this.consultorioRepository.find({
            relations: ['medico', 'medico.rol'],
            where: {
                id,
            },
        });
        const consultorio = consultorios[0];
        if (!consultorio)
            throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        const { medico } = consultorio, restoDatos = __rest(consultorio, ["medico"]);
        const medicoSinPassword = Object.assign(Object.assign({}, medico), { password: undefined });
        return Object.assign(Object.assign({}, restoDatos), { medico: medicoSinPassword });
    }
    async update(consultorio_id, updateConsultorioDto) {
        try {
            const consultorio = await this.consultorioRepository.findOne({
                relations: ['medico'],
                where: { id: consultorio_id },
            });
            if (!consultorio) {
                throw new common_1.NotFoundException(`Consultorio with ID ${consultorio_id} not found`);
            }
            const id = updateConsultorioDto.medico_id;
            const medico = await this.userService.findById(id);
            if (medico.rol.id !== 2) {
                throw new common_1.BadRequestException('Esa cuenta no pertenece a un medico');
            }
            consultorio.especialidad = updateConsultorioDto.especialidad;
            consultorio.medico = medico;
            return await this.consultorioRepository.save(consultorio);
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.BadRequestException('El consultorio ya existe');
            }
        }
    }
    async findUsuariosSinConsultorio() {
        const consultorios = await this.consultorioRepository.find({
            relations: ['medico'],
        });
        const consultorioIds = consultorios.map(consultorio => consultorio.medico.id);
        const usuariosSinConsultorio = await this.userService.findUsuariosSinConsultorio(consultorioIds);
        return usuariosSinConsultorio;
    }
    remove(id) {
        return this.consultorioRepository.delete(id);
    }
};
exports.ConsultoriosService = ConsultoriosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consultorio_entity_1.Consultorio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], ConsultoriosService);
//# sourceMappingURL=consultorios.service.js.map