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
exports.Consultorio = void 0;
const cita_entity_1 = require("../../cita/entities/cita.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Consultorio = exports.Consultorio = class Consultorio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID del consultorio' }),
    __metadata("design:type", Number)
], Consultorio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    (0, swagger_1.ApiProperty)({ example: 'Especialidad del consultorio', description: 'Especialidad del consultorio' }),
    __metadata("design:type", String)
], Consultorio.prototype, "especialidad", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, { cascade: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_medico' }),
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.User, description: 'Médico asignado al consultorio' }),
    __metadata("design:type", user_entity_1.User)
], Consultorio.prototype, "medico", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cita_entity_1.Cita, cita => cita.consultorios),
    (0, swagger_1.ApiProperty)({ type: () => cita_entity_1.Cita, isArray: true, description: 'Lista de citas relacionadas al consultorio' }),
    __metadata("design:type", Array)
], Consultorio.prototype, "citas", void 0);
exports.Consultorio = Consultorio = __decorate([
    (0, typeorm_1.Entity)()
], Consultorio);
//# sourceMappingURL=consultorio.entity.js.map