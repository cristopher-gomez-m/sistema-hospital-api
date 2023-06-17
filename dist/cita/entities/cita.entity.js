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
exports.Cita = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
const consultorio_entity_1 = require("../../consultorios/entities/consultorio.entity");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Cita = exports.Cita = class Cita {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la cita', example: 1 }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cita.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [consultorio_entity_1.Consultorio], description: 'Lista de consultorios asociados a la cita' }),
    (0, typeorm_1.ManyToMany)(() => consultorio_entity_1.Consultorio),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Cita.prototype, "consultorios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de la cita', example: '2023-06-15' }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Cita.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hora de la cita', example: '09:00 AM' }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Cita.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.User, description: 'Usuario asociado a la cita' }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.citas),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Cita.prototype, "user", void 0);
exports.Cita = Cita = __decorate([
    (0, typeorm_1.Entity)()
], Cita);
//# sourceMappingURL=cita.entity.js.map