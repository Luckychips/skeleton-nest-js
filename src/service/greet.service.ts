import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetService {
  getHello(): string {
    return 'Hello World!';
  }

  getNewbieHello(name: string): string {
    return `${name}, welcome to my world.`;
  }
}
