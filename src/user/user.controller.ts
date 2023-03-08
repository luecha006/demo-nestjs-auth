import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { GetUser } from './../auth/get-user.decorator';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UseGuards(AuthGuard())
  createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.createUser(createUserDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Body() req: string, @GetUser() user: User) {
    console.log('req: ', req);
    console.log('user: ', user);
  }
}
