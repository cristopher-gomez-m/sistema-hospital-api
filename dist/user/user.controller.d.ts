import { UserService } from './user.service';
import { CreateUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAllPacientes(): Promise<User[]>;
    findAllMedicos(): Promise<User[]>;
    findOneById(): Promise<User>;
    findHistorial(user_id: string): Promise<User>;
    updateNombreYApellido(user_id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
}
