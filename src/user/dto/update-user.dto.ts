import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    nombre: string;
  
    @IsNotEmpty()
    apellido: string;
}