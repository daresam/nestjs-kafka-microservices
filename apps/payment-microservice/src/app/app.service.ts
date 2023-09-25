import { MakePaymentDto } from '@nestjs-kafka-microservices/libs/dto';
import { User } from '@nestjs-kafka-microservices/libs/entities';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {

  constructor(@Inject('AUTH_SERVICE') private readonly authClient: ClientKafka){}

  processPayment(makePaymetDto: MakePaymentDto){
    const {userId, amount} = makePaymetDto;

    this.authClient
      .send('get_user', JSON.stringify({userId}))
      .subscribe((user: User) => {
        console.log(
          `process payment for user ${user.name} - amount: ${amount}`
        );
      });
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
