import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/register-user.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository
    ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findByUsername(email: string) {
    return this.userRepository.find({
      where: { email },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneByUsername(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }



  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
