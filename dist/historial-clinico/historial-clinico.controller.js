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
exports.HistorialClinicoController = void 0;
const common_1 = require("@nestjs/common");
const historial_clinico_service_1 = require("./historial-clinico.service");
const create_historial_clinico_dto_1 = require("./dto/create-historial-clinico.dto");
const update_historial_clinico_dto_1 = require("./dto/update-historial-clinico.dto");
const swagger_1 = require("@nestjs/swagger");
const historial_clinico_entity_1 = require("./entities/historial-clinico.entity");
let HistorialClinicoController = exports.HistorialClinicoController = class HistorialClinicoController {
    constructor(historialClinicoService) {
        this.historialClinicoService = historialClinicoService;
    }
    create(createHistorialClinicoDto) {
        return this.historialClinicoService.create(createHistorialClinicoDto);
    }
    findAll() {
        return this.historialClinicoService.findAll();
    }
    findOne(id) {
        return this.historialClinicoService.findOne(+id);
    }
    update(id, updateHistorialClinicoDto) {
        return this.historialClinicoService.update(+id, updateHistorialClinicoDto);
    }
    remove(id) {
        return this.historialClinicoService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear un historial clínico' }),
    (0, swagger_1.ApiBody)({ type: create_historial_clinico_dto_1.CreateHistorialClinicoDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El historial clínico ha sido creado exitosamente', type: historial_clinico_entity_1.HistorialClinico }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_historial_clinico_dto_1.CreateHistorialClinicoDto]),
    __metadata("design:returntype", void 0)
], HistorialClinicoController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los historiales clínicos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todos los historiales clínicos', type: historial_clinico_entity_1.HistorialClinico }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HistorialClinicoController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un historial clínico por su ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del historial clínico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El historial clínico encontrado', type: historial_clinico_entity_1.HistorialClinico }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistorialClinicoController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un historial clínico' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del historial clínico' }),
    (0, swagger_1.ApiBody)({ type: update_historial_clinico_dto_1.UpdateHistorialClinicoDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El historial clínico ha sido actualizado exitosamente', type: historial_clinico_entity_1.HistorialClinico }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_historial_clinico_dto_1.UpdateHistorialClinicoDto]),
    __metadata("design:returntype", void 0)
], HistorialClinicoController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un historial clínico' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del historial clínico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El historial clínico ha sido eliminado exitosamente' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistorialClinicoController.prototype, "remove", null);
exports.HistorialClinicoController = HistorialClinicoController = __decorate([
    (0, common_1.Controller)('historial-clinico'),
    __metadata("design:paramtypes", [historial_clinico_service_1.HistorialClinicoService])
], HistorialClinicoController);
//# sourceMappingURL=historial-clinico.controller.js.map