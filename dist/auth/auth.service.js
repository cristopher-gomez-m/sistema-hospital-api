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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, JwtService) {
        this.userService = userService;
        this.JwtService = JwtService;
    }
    async register(registerBody) {
        const { email, password } = registerBody;
        const usersExist = await this.userService.findOneByUsername(email);
        if (usersExist)
            throw new common_1.HttpException('El usuario ya existe', common_1.HttpStatus.CONFLICT);
        const plainToHash = await (0, bcrypt_1.hash)(password, 10);
        registerBody = Object.assign(Object.assign({}, registerBody), { password: plainToHash });
        return this.userService.create(registerBody);
    }
    async login(loginBody) {
        const { email, password } = loginBody;
        const usersExist = await this.userService.findOneByUsername(email);
        if (!usersExist)
            throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        const checkPassword = await (0, bcrypt_1.compare)(password, usersExist.password);
        if (!checkPassword)
            throw new common_1.HttpException('PASSWORD_INVALID', common_1.HttpStatus.CONFLICT);
        const payload = { id: usersExist.id };
        const token = await this.JwtService.sign(payload);
        const { password: _ } = usersExist, userWithoutPassword = __rest(usersExist, ["password"]);
        const data = {
            user: userWithoutPassword,
            token
        };
        return data;
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map