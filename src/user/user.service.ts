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

  findByUsername(username: string) {
    return this.userRepository.find({
      where: { username },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }



  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
