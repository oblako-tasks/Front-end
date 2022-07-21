import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input()
  public id: number | undefined;
  
  @Input()
  public title: string | undefined;

  @Input()
  public todos: Todo[] | undefined;

  public status: number = 0;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void { }

  toggleStatusTodo(todo: Todo) {
    this.todosService.updateCheckCompleted(todo).subscribe();
  }
}