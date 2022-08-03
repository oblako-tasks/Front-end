import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Tasks } from './models/tasks';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: Tasks[] = [];

  title = 'my-app';

  constructor(
    private taskService: TaskService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
  this.apollo.query({
      query: gql`query {
        tasks {
          id,
          title,
        }
        todos {
          id,
          text,
          isCompleted,
          taskID,
        }
      }`
    }).subscribe(({ data }) => {
      console.log(data);
    });

    this.getAllCards();
  }

  trackByFn(index: number, task: Tasks): number {
    return task.id;
  }

  private getAllCards(): void {
    this.taskService.getTasks().subscribe(cards => this.data = cards);
  }

  updateTasks(event: any): void {
    if (event) {
      let objIndex = this.data.findIndex((obj => obj.title == event.title));
    
      if (objIndex !== -1) {
        this.data[objIndex].todos.push(event.todos);
      } else {
        const updateTask = {
          id: event.id,
          title: event.title,
          todos: [event.todos]
        };

        this.data.push(updateTask);
      }
    }
  }
}