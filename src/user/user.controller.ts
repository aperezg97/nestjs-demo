import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UserDto } from '../models/UserDto';
import { Observable } from 'rxjs';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get('express')
  findAllExpress(@Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .send('This action returns all users, Express approach');
    // .json({ message:  })
  }

  @Post()
  async create(@Body() userDto: UserDto) {
    return { message: 'Usuario creado correctamente', data: userDto };
  }
}
