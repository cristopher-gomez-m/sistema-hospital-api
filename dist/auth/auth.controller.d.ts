import { AuthService } from './auth.service';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { CreateUserDto } from 'src/user/dto/register-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(loginBody: CreateUserDto): Promise<import("../user/entities/user.entity").User>;
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
