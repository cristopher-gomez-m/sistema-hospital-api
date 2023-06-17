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
exports.CitaController = void 0;
const common_1 = require("@nestjs/common");
const cita_service_1 = require("./cita.service");
const create_cita_dto_1 = require("./dto/create-cita.dto");
const update_cita_dto_1 = require("./dto/update-cita.dto");
const swagger_1 = require("@nestjs/swagger");
let CitaController = exports.CitaController = class CitaController {
    constructor(citaService) {
        this.citaService = citaService;
    }
    create(createCitaDto) {
        return this.citaService.create(createCitaDto);
    }
    findAllById(userId) {
        return this.citaService.findAllById(userId);
    }
    findLastOne(id) {
        return this.citaService.findLastOne(+id);
    }
    update(id, updateCitaDto) {
        return this.citaService.update(+id, updateCitaDto);
    }
    remove(id) {
        return this.citaService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crea una cita' }),
    (0, swagger_1.ApiBody)({ type: create_cita_dto_1.CreateCitaDto, description: 'Datos para crear una nueva cita' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'La cita ha sido creada correctamente' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cita_dto_1.CreateCitaDto]),
    __metadata("design:returntype", void 0)
], CitaController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Lista de citas' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'ID del usuario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de citas encontradas' }),
    (0, common_1.Get)(':user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitaController.prototype, "findAllById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Busca la última cita' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la cita' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La última cita encontrada' }),
    (0, common_1.Get)('last/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitaController.prototype, "findLastOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualiza la cita' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la cita' }),
    (0, swagger_1.ApiBody)({ type: update_cita_dto_1.UpdateCitaDto, description: 'Datos para actualizar la cita' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La cita ha sido actualizada correctamente' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cita_dto_1.UpdateCitaDto]),
    __metadata("design:returntype", void 0)
], CitaController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Elimina la cita' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la cita' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La cita ha sido eliminada correctamente' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitaController.prototype, "remove", null);
exports.CitaController = CitaController = __decorate([
    (0, common_1.Controller)('cita'),
    __metadata("design:paramtypes", [cita_service_1.CitaService])
], CitaController);
//# sourceMappingURL=cita.controller.js.map