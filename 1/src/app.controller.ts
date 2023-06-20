import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

let User = [];
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers() {
    return User;
  }

  @Post('add')
  @UsePipes(new ValidationPipe())
  addUser(@Body() create: CreateDto) {
    User.push(create);
    return 'User added successfully';
  }
  @Get('user/:name')
  getUserbyName(@Param('name') name: string) {
    return User.find((User) => User.name === name);
  }
  @Get('user/id/:id')
  getUserbyId(@Param('id') id: string) {
    return User.find((User) => User.id == id);
  }
  @Post('delete/:name')
  deleteUserByname(@Param('name') name: string) {
    return (User = User.filter((item) => item.name !== name));
  }
  @Post('delete/id/:id')
  deleteUserByid(@Param('id') id: string) {
    return (User = User.filter((item) => item.id != id));
  }
  @Post('user/update/:id')
  updateUserById(@Param('id') id: number, @Body() DTO: CreateDto) {
    let found = false;
    const userId = User.findIndex((user) => user.id == id);
    if (User.find((User) => User.id == id)) {
      found = true;
    } else {
      return 'User not found';
    }
    if (found == true) {
      User[userId].name = DTO.name;
      User[userId].password = DTO.password;
      return 'User Updated successfully';
    } else {
      return 'Expected fields are name and password';
    }
  }
  @Post('login')
  Login(@Req() req: Request & { session: any }) {
    req.session.username = 'abd';
    return req.session.username;
  }
}
