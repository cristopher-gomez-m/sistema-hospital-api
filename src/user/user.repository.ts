import {  EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';


//@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Métodos personalizados del repositorio, si los tienes
}