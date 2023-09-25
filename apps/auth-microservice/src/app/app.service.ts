
import { User } from '@nestjs-kafka-microservices/libs/entities';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from '@nestjs-kafka-microservices/libs/dto';


@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }

  getUser(id: number): User {
    return this.usersRepository.findOne(id);
  }
}
