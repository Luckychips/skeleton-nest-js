import { Controller, Get, Param } from '@nestjs/common';
import { GreetService } from '../service';

@Controller('greet')
export class GreetController {
  constructor(private readonly greetService: GreetService) {}

  @Get('newbie')
  getHello(): string {
    return this.greetService.getHello();
  }

  @Get(':name')
  getNewbieHello(@Param() params): string {
    return this.greetService.getNewbieHello(params.name);
  }
}
