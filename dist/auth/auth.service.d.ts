import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/register-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
export declare class AuthService {
    private userService;
    private JwtService;
    constructor(userService: UserService, JwtService: JwtService);
    register(registerBody: CreateUserDto): Promise<User>;
    login(loginBody: LoginUserDto): Promise<{
        user: {
            id: number;
            email: string;
            rol: import("../rol/rol.entity").Rol;
            nombre: string;
            apellido: string;
            cedula: string;
            direccion: string;
            historial_clinico: import("../historial-clinico/entities/historial-clinico.entity").HistorialClinico;
            citas: import("../cita/entities/cita.entity").Cita[];
        };
        token: string;
    }>;
}
