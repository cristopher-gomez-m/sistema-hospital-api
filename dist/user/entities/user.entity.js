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
exports.User = void 0;
const cita_entity_1 = require("../../cita/entities/cita.entity");
const historial_clinico_entity_1 = require("../../historial-clinico/entities/historial-clinico.entity");
const rol_entity_1 = require("../../rol/rol.entity");
const typeorm_1 = require("typeorm");
let User = exports.User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entity_1.Rol),
    (0, typeorm_1.JoinColumn)({ name: 'rol_id' }),
    __metadata("design:type", rol_entity_1.Rol)
], User.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], User.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 70 }),
    __metadata("design:type", String)
], User.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => historial_clinico_entity_1.HistorialClinico, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", historial_clinico_entity_1.HistorialClinico)
], User.prototype, "historial_clinico", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cita_entity_1.Cita, cita => cita.user),
    __metadata("design:type", Array)
], User.prototype, "citas", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map