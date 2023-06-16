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
exports.MedicosController = void 0;
const common_1 = require("@nestjs/common");
const medicos_service_1 = require("./medicos.service");
const create_medico_dto_1 = require("./dto/create-medico.dto");
const update_medico_dto_1 = require("./dto/update-medico.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user/entities/user.entity");
let MedicosController = exports.MedicosController = class MedicosController {
    constructor(medicosService) {
        this.medicosService = medicosService;
    }
    create(createMedicoDto) {
        return this.medicosService.create(createMedicoDto);
    }
    findAll() {
        return this.medicosService.findAll();
    }
    findOne(id) {
        return this.medicosService.findOne(+id);
    }
    update(id, updateConsultorioDto) {
        return this.medicosService.update(+id, updateConsultorioDto);
    }
    remove(id) {
        return this.medicosService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo médico' }),
    (0, swagger_1.ApiBody)({ type: create_medico_dto_1.CreateMedicoDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Médico creado exitosamente', type: user_entity_1.User }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medico_dto_1.CreateMedicoDto]),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los médicos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Médicos encontrados', type: user_entity_1.User }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un médico por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Médico encontrado', type: user_entity_1.User }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un médico' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiBody)({ type: update_medico_dto_1.UpdateMedicoDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Médico actualizado exitosamente' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medico_dto_1.UpdateMedicoDto]),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un médico' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Médico eliminado exitosamente' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicosController.prototype, "remove", null);
exports.MedicosController = MedicosController = __decorate([
    (0, common_1.Controller)('medicos'),
    __metadata("design:paramtypes", [medicos_service_1.MedicosService])
], MedicosController);
//# sourceMappingURL=medicos.controller.js.map