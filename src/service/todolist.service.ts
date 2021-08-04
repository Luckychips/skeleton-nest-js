import { Injectable } from '@nestjs/common';
import { TodoListItem } from '../model';

@Injectable()
export class TodoListService {
  getList(): TodoListItem[] {
    return [];
  }

  getItem(id: string): TodoListItem {
    return {
      id: id,
      title: 'item-0',
    };
  }
}
