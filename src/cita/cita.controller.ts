import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Controller('cita')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @Post()
  create(@Body() createCitaDto: CreateCitaDto) {
    return this.citaService.create(createCitaDto);
  }

  @Get(':user_id')
  findAllById(@Param('user_id') userId: number) {
    return this.citaService.findAllById(userId);
  }
  @Get('last/:id')
  findLastOne(@Param('id') id: string) {
    return this.citaService.findLastOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitaDto: UpdateCitaDto) {
    return this.citaService.update(+id, updateCitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citaService.remove(+id);
  }
}
