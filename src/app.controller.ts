import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { GetNumberDto } from './getNumber.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('classify-number')
  async getNumber(@Query('number') number: string): Promise<GetNumberDto> {
    // Validate that 'number' is a valid integer
    if (!number || isNaN(Number(number)) || !Number.isInteger(Number(number))) {
      throw new BadRequestException({
        number: 'alphabet',
        error: true,
      });
    }

    // Convert to integer
    const digit = parseInt(number, 10);

    return {
      number: digit,
      is_prime: this.appService.isPrime(digit),
      is_perfect: this.appService.isPerfectNumber(digit),
      properties: this.appService.getNumberProperties(digit),
      digit_sum: this.appService.getSumNumbers(digit),
      fun_fact: await this.appService.getFunFact(digit),
    };
  }
}
