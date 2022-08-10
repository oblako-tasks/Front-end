import { Component, Input, OnInit } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import { UPDATETODO_MUTATION } from 'src/app/graphql';
import { Todo } from 'src/app/models/todo';

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

  private query: Observable<MutationResult<any>> | undefined;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void { }

  trackByFn(index: number, todo: Todo): number {
    return todo.id!;
  }

  toggleStatusTodo(todo: Todo): void {
    this.apollo
    .mutate({
      mutation: UPDATETODO_MUTATION,
      variables: {
        todoID!: +<number>todo.id
      }
    })
    .subscribe(() => {});
  }
}