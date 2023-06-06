import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare, hash } from 'bcrypt';
import { CreateUserDto } from '../user/dto/register-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private JwtService: JwtService,
  ) {}
  
  async register(registerBody: CreateUserDto) {
    const { password } = registerBody;
    const plainToHash = await hash(password, 10);
    registerBody = { ...registerBody, password: plainToHash };
    return this.userService.create(registerBody);
  }

  async login(loginBody: LoginUserDto) {
    const { email, password } = loginBody;
    //al haber el mismo nickname, buscamos todos
    const usersExist = await this.userService.findByUsername(email);
    if (usersExist.length === 0)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    let findUser:User;
    //se realiza la comparacion para cada cuenta
    for (let user of usersExist) {
      const checkPassword = await compare(password, user.password);
      if (checkPassword) {
        findUser = user;
        break;
      }
    }
    if (!findUser)     throw new HttpException('PASSWORD_INVALID', HttpStatus.CONFLICT);

    const payload={id: findUser.id};
    const token = await this.JwtService.sign(payload);
    const { password: _, ...userWithoutPassword } = findUser;
    const data={
        user: userWithoutPassword,
        token
    }
    return data;
  }
  
  findAll() {
    return this.userService.findAll();
  }
}
