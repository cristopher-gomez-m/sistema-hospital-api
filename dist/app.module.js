"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const rol_module_1 = require("./rol/rol.module");
const consultorios_module_1 = require("./consultorios/consultorios.module");
const medicos_module_1 = require("./medicos/medicos.module");
const historial_clinico_module_1 = require("./historial-clinico/historial-clinico.module");
const historial_clinico_entity_1 = require("./historial-clinico/entities/historial-clinico.entity");
const cita_module_1 = require("./cita/cita.module");
const user_entity_1 = require("./user/entities/user.entity");
const rol_entity_1 = require("./rol/rol.entity");
const consultorio_entity_1 = require("./consultorios/entities/consultorio.entity");
const cita_entity_1 = require("./cita/entities/cita.entity");
require('dotenv').config();
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [user_entity_1.User, rol_entity_1.Rol, consultorio_entity_1.Consultorio, historial_clinico_entity_1.HistorialClinico, cita_entity_1.Cita],
                synchronize: true,
                ssl: process.env.NODE_ENV !== 'development',
            }), user_module_1.UserModule, auth_module_1.AuthModule, rol_module_1.RolModule, consultorios_module_1.ConsultoriosModule, medicos_module_1.MedicosModule, historial_clinico_module_1.HistorialClinicoModule, cita_module_1.CitaModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map