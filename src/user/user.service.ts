import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/register-user.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Equal, In, Not } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findByUsername(email: string) {
    return this.userRepository.find({
      relations: ['rol'],
      where: { email },
    });
  }

  findById(id: number): Promise<User> {
    return this.userRepository.findOne({
      relations: ['rol'],
      where: { id },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findAllMedicos() {
    return this.userRepository.find({
      where: { rol: Equal(2) },
    });
  }
  
  async findUsuariosSinConsultorio(consultorioIds: number[]){
    return await this.userRepository.find({
      where: {
        id: Not(In(consultorioIds)),
        rol: Equal(2),
      },
    });
  }

  findOneByUsername(email: string) {
    return this.userRepository.findOne({ 
      relations: ['rol'],
      where: { email } });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
