import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@nestjs-kafka-microservices/libs/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){

  }

  @Post('signup')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto){
    return this.authService.createUser(createUserDto);

  }
}
