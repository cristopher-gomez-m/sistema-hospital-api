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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicosService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt_1 = require("bcrypt");
let MedicosService = exports.MedicosService = class MedicosService {
    constructor(userService) {
        this.userService = userService;
    }
    async create(createMedicoDto) {
        const { email, password } = createMedicoDto;
        const usersExist = await this.userService.findOneByUsername(email);
        if (usersExist)
            throw new common_1.HttpException('El correo ya existe', common_1.HttpStatus.CONFLICT);
        const plainToHash = await (0, bcrypt_1.hash)(password, 10);
        const rol = { id: 2, nombre: 'medico' };
        createMedicoDto = Object.assign(Object.assign({}, createMedicoDto), { password: plainToHash, rol });
        return this.userService.create(createMedicoDto);
    }
    async findAll() {
        return await this.userService.findAllMedicos();
    }
    async findOne(id) {
        return await this.userService.findMedicoById(id);
    }
    async update(id, updateMedicoDto) {
        try {
            let medico = await this.userService.findById(id);
            if (medico.rol.id !== 2) {
                throw new common_1.BadRequestException('Esa cuenta no pertenece a un medico');
            }
            Object.assign(medico, updateMedicoDto);
            return this.userService.updateMedico(id, medico);
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.BadRequestException('El consultorio ya existe');
            }
        }
    }
    async remove(id) {
        let medico = await this.userService.findById(id);
        if (!medico) {
            throw new common_1.NotFoundException('Historial clínico no encontrado');
        }
        return this.userService.remove(id);
    }
};
exports.MedicosService = MedicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], MedicosService);
//# sourceMappingURL=medicos.service.js.map