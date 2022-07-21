import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTask } from '../models/create-task';
import { Tasks } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'https://oblako-tasks-back-end.herokuapp.com/projects';
  
  constructor(private httpClient: HttpClient) { }

  public getTasks(): Observable<Tasks[]> {
    return this.httpClient.get<Tasks[]>(this.url);
  }

  public saveTask(createData: CreateTask): Observable<void> {
    return this.httpClient.post<void>(`${this.url}/todos`, createData);
  }
}