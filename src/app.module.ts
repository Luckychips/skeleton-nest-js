import { Module } from '@nestjs/common';
import { GreetController, TodoListController } from './controller';
import { GreetService, TodoListService } from './service';

@Module({
  imports: [],
  controllers: [GreetController, TodoListController],
  providers: [GreetService, TodoListService],
})
export class AppModule {}
