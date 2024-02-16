import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return user;
  }
  @Get()
  async getAll() {
    const user = await this.usersService.getAll();
    return user;
  }
}
