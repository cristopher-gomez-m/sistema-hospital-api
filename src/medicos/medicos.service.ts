import { Injectable } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class MedicosService {
  constructor(
    private userService: UserService,
  ){}
  create(createMedicoDto: CreateMedicoDto) {
    return 'This action adds a new medico';
  }

  async findAll() {
    return await this.userService.findAllMedicos();
  }

  findOne(id: number) {
    return `This action returns a #${id} medico`;
  }

  update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return `This action updates a #${id} medico`;
  }

  remove(id: number) {
    return `This action removes a #${id} medico`;
  }
}
