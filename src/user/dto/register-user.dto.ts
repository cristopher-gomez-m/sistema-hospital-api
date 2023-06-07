import { IsEmail, IsNotEmpty } from "class-validator";
import { Rol } from '../../rol/rol.entity';
export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    rol: Rol;

    @IsNotEmpty()
    nombre: string;
  
    @IsNotEmpty()
    apellido: string;
  
    @IsNotEmpty()
    direccion: string;
}
