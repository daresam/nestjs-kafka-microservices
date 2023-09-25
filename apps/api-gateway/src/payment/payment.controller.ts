import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from '@nestjs-kafka-microservices/libs/dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService){}

  @Post('pay')
  makePayment(@Body(ValidationPipe) makePaymetDto: MakePaymentDto){
    return this.paymentService.makePayment(makePaymetDto);

  }
}
