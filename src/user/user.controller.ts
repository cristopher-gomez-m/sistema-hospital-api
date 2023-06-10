import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/register-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
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
    return this.userService.findById(8);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
