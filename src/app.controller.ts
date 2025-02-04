import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('classify-number')
  async getNumber(@Query('number') number: string) {

    // converting to integer
    const digit = parseInt(number, 10);

    return {
      number: digit,
      is_prime: this.appService.isPrime(digit),
      is_perfect: this.appService.isPerfectNumber(digit),
      properties: this.appService.getNumberProperties(digit),
      digit_sum: this.appService.getSumNumbers(digit),
      fun_fact: await this.appService.getFunFact(digit)
    };
  }
}
