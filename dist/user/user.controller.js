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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const register_user_dto_1 = require("./dto/register-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./entities/user.entity");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findAllPacientes() {
        return this.userService.findAllPacientes();
    }
    findAllMedicos() {
        return this.userService.findAllMedicos();
    }
    findOneById() {
        return this.userService.findById(16);
    }
    findHistorial(user_id) {
        return this.userService.findById(+user_id);
    }
    updateNombreYApellido(user_id, updateUserDto) {
        return this.userService.updateNombreYApellido(+user_id, updateUserDto);
    }
    remove(id) {
        return this.userService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear usuario' }),
    (0, swagger_1.ApiBody)({ type: register_user_dto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario creado exitosamente' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los pacientes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todos los pacientes', type: user_entity_1.User }),
    (0, common_1.Get)('pacientes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAllPacientes", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los medicos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todos los medicos', type: user_entity_1.User }),
    (0, common_1.Get)('allMedicos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAllMedicos", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener usuario por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario encontrado', type: user_entity_1.User }),
    (0, common_1.Get)('prueba'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener historial por ID de usuario' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'ID del usuario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Historial del usuario', type: user_entity_1.User }),
    (0, common_1.Get)('historial/:user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findHistorial", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar nombre y apellido del usuario' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'ID del usuario' }),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario actualizado exitosamente' }),
    (0, common_1.Put)(':user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateNombreYApellido", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar usuario por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del usuario a eliminar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario eliminado exitosamente' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map