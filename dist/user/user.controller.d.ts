import { UserService } from './user.service';
import { CreateUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAllPacientes(): Promise<import("./entities/user.entity").User[]>;
    findAllMedicos(): Promise<import("./entities/user.entity").User[]>;
    findOneById(): Promise<import("./entities/user.entity").User>;
    findHistorial(user_id: string): Promise<import("./entities/user.entity").User>;
    updateNombreYApellido(user_id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    remove(id: string): Promise<void>;
}
