import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private url = 'https://oblako-tasks-back-end.herokuapp.com/projects/todo';

  constructor(private httpClient: HttpClient) { }

  public updateCheckCompleted(todo: Todo): Observable<Todo> {
    return this.httpClient.patch<Todo>(`${this.url}/${todo.id}`, todo);
  }
}