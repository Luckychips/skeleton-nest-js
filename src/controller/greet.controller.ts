import { Controller, Get } from '@nestjs/common';
import { GreetService } from '../service';

@Controller()
export class GreetController {
  constructor(private readonly greetService: GreetService) {}

  @Get()
  getHello(): string {
    return this.greetService.getHello();
  }
}
