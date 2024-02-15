import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
