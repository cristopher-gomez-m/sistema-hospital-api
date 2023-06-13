import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('pacientes')
  findAllPacientes() {
    return this.userService.findAllPacientes();
  }

  @Get('allMedicos')
  findAllMedicos() {
    return this.userService.findAllMedicos();
  }
/*
  @Get('medicos/nombres')
  findAllNamesMedicos() {
    return this.userService.findAllNamesMedicos();
  }
*/
  @Get('prueba')
  findOneById() {
    return this.userService.findById(16);
  }

  @Get('historial/:user_id')
  findHistorial(@Param('user_id')user_id: string){
    return this.userService.findById(+user_id);
  }

  @Put(':user_id')
  updateNombreYApellido(@Param('user_id')user_id: string, @Body() updateUserDto:UpdateUserDto){
    return this.userService.updateNombreYApellido(+user_id,updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
