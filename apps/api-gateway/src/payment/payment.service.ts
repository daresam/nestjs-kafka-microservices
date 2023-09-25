import { MakePaymentDto } from '@nestjs-kafka-microservices/libs/dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PaymentService {
  constructor(@Inject('PAYMENT_MICROSERVICE') private readonly paymentClient: ClientKafka){}

  makePayment(makePaymentDto: MakePaymentDto){
    this.paymentClient.emit('process_payment', JSON.stringify(makePaymentDto));
  }
}
