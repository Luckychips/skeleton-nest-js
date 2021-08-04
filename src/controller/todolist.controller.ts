import { Controller, Get, Param } from '@nestjs/common';
import { TodoListService } from '../service';
import { TodoListItem } from '../model';

@Controller('todolist')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Get()
  getHello(): TodoListItem[] {
    return this.todoListService.getList();
  }

  @Get(':item_id')
  getNewbieHello(@Param() params): TodoListItem {
    return this.todoListService.getItem(params.item_id);
  }
}
