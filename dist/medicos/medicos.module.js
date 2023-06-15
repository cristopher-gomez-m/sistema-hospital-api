"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicosModule = void 0;
const common_1 = require("@nestjs/common");
const medicos_service_1 = require("./medicos.service");
const medicos_controller_1 = require("./medicos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const user_service_1 = require("../user/user.service");
const user_repository_1 = require("../user/user.repository");
const historial_clinico_repository_1 = require("../historial-clinico/historial-clinico.repository");
const historial_clinico_entity_1 = require("../historial-clinico/entities/historial-clinico.entity");
const historial_clinico_service_1 = require("../historial-clinico/historial-clinico.service");
let MedicosModule = exports.MedicosModule = class MedicosModule {
};
exports.MedicosModule = MedicosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, historial_clinico_entity_1.HistorialClinico])],
        controllers: [medicos_controller_1.MedicosController],
        providers: [medicos_service_1.MedicosService, historial_clinico_service_1.HistorialClinicoService, historial_clinico_repository_1.HistorialClinicoRepository, user_service_1.UserService, user_repository_1.UserRepository]
    })
], MedicosModule);
//# sourceMappingURL=medicos.module.js.map