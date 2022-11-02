import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(){
    return await this.usersService.getAllUsers()
  }

  @Post('login')
  async login(@Body() input){
    return await this.usersService.login(input)
  }

  @Post('changeAvatar')
  async changeAvatar(@Body() input){
    return await this.usersService.changeAvatar(input)
  }

  
}
