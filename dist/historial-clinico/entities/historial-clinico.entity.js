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
exports.HistorialClinico = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let HistorialClinico = exports.HistorialClinico = class HistorialClinico {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25, description: 'Edad del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "edad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 170, description: 'Altura del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "altura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 70, description: 'Peso del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "peso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 23, description: 'Masa corporal del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "masa_corporal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 37, description: 'Temperatura del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "temperatura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 18, description: 'Frecuencia respiratoria del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "frecuencia_respiratoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20, description: 'Presión arterial del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "presion_arterial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 70, description: 'Frecuencia cardíaca del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "frecuencia_cardiaca", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicador de diabetes del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], HistorialClinico.prototype, "diabetes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de diabetes', description: 'Descripción de diabetes del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "diabetes_descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicador de afección tiroidea del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], HistorialClinico.prototype, "tiroideas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de afección tiroidea', description: 'Descripción de afección tiroidea del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "tiroideas_descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicador de hipertensión del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], HistorialClinico.prototype, "hipertension", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de hipertensión', description: 'Descripción de hipertensión del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "hipertension_descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicador de cardiopatía del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], HistorialClinico.prototype, "cardiopatia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de cardiopatía', description: 'Descripción de cardiopatía del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "cardiopatia_descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicador de traumatismo del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], HistorialClinico.prototype, "traumatismo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de traumatismo', description: 'Descripción de traumatismo del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "traumatismo_descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicador de cáncer del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], HistorialClinico.prototype, "cancer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de cáncer', description: 'Descripción de cáncer del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "cancer_descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicador de otros problemas del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], HistorialClinico.prototype, "otros", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de otros problemas', description: 'Descripción de otros problemas del paciente', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "otros_descripcion", void 0);
exports.HistorialClinico = HistorialClinico = __decorate([
    (0, typeorm_1.Entity)()
], HistorialClinico);
//# sourceMappingURL=historial-clinico.entity.js.map