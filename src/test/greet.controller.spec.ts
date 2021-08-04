import { Test, TestingModule } from '@nestjs/testing';
import { GreetController } from '../controller/greet.controller';
import { GreetService } from '../service/greet.service';

describe('GreetController', () => {
  let greetController: GreetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GreetController],
      providers: [GreetService],
    }).compile();

    greetController = app.get<GreetController>(GreetController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(greetController.getHello()).toBe('Hello World!');
    });
  });
});
