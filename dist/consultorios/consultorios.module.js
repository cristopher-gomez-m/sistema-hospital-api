"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultoriosModule = void 0;
const common_1 = require("@nestjs/common");
const consultorios_service_1 = require("./consultorios.service");
const consultorios_controller_1 = require("./consultorios.controller");
const typeorm_1 = require("@nestjs/typeorm");
const consultorio_entity_1 = require("./entities/consultorio.entity");
const user_repository_1 = require("../user/user.repository");
const user_entity_1 = require("../user/entities/user.entity");
const user_service_1 = require("../user/user.service");
const historial_clinico_repository_1 = require("../historial-clinico/historial-clinico.repository");
const historial_clinico_entity_1 = require("../historial-clinico/entities/historial-clinico.entity");
const historial_clinico_service_1 = require("../historial-clinico/historial-clinico.service");
let ConsultoriosModule = exports.ConsultoriosModule = class ConsultoriosModule {
};
exports.ConsultoriosModule = ConsultoriosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([consultorio_entity_1.Consultorio, user_entity_1.User, historial_clinico_entity_1.HistorialClinico])],
        controllers: [consultorios_controller_1.ConsultoriosController],
        providers: [consultorios_service_1.ConsultoriosService, historial_clinico_repository_1.HistorialClinicoRepository, historial_clinico_service_1.HistorialClinicoService, user_service_1.UserService, user_repository_1.UserRepository]
    })
], ConsultoriosModule);
//# sourceMappingURL=consultorios.module.js.map