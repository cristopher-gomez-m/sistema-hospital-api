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
exports.ConsultoriosController = void 0;
const common_1 = require("@nestjs/common");
const consultorios_service_1 = require("./consultorios.service");
const create_consultorio_dto_1 = require("./dto/create-consultorio.dto");
const update_consultorio_dto_1 = require("./dto/update-consultorio.dto");
const swagger_1 = require("@nestjs/swagger");
let ConsultoriosController = exports.ConsultoriosController = class ConsultoriosController {
    constructor(consultoriosService) {
        this.consultoriosService = consultoriosService;
    }
    create(createConsultorioDto) {
        return this.consultoriosService.create(createConsultorioDto);
    }
    findAllNamesMedicos() {
        return this.consultoriosService.findUsuariosSinConsultorio();
    }
    findAll() {
        return this.consultoriosService.findAll();
    }
    findOne(id) {
        return this.consultoriosService.findOne(+id);
    }
    update(id, updateConsultorioDto) {
        return this.consultoriosService.update(+id, updateConsultorioDto);
    }
    remove(id) {
        return this.consultoriosService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un consultorio' }),
    (0, swagger_1.ApiBody)({ type: create_consultorio_dto_1.CreateConsultorioDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El consultorio ha sido creado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_consultorio_dto_1.CreateConsultorioDto]),
    __metadata("design:returntype", void 0)
], ConsultoriosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene los nombres de los medicos' }),
    (0, common_1.Get)('medicos/nombres'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Obtiene los nombres de los médicos sin consultorio' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsultoriosController.prototype, "findAllNamesMedicos", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene los consultorios' }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Obtiene todos los consultorios' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsultoriosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene los consultorios por Id' }),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Obtiene un consultorio por su ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsultoriosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualiza el consultorio' }),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBody)({ type: update_consultorio_dto_1.UpdateConsultorioDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El consultorio ha sido actualizado exitosamente' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_consultorio_dto_1.UpdateConsultorioDto]),
    __metadata("design:returntype", void 0)
], ConsultoriosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Elimina el consultorio' }),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El consultorio ha sido eliminado exitosamente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsultoriosController.prototype, "remove", null);
exports.ConsultoriosController = ConsultoriosController = __decorate([
    (0, common_1.Controller)('consultorios'),
    __metadata("design:paramtypes", [consultorios_service_1.ConsultoriosService])
], ConsultoriosController);
//# sourceMappingURL=consultorios.controller.js.map