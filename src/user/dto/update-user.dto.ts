import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ description: 'Nombre del usuario', example: 'Charlie' })
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Apellido del usuario', example: 'Rodríguez' })
    @IsNotEmpty()
    apellido: string;
}