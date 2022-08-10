import { Component } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { ALLDATA_QUERY } from './graphql';
import { Tasks } from './models/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: Tasks[] = [];
  private query: QueryRef<any> | undefined;

  title = 'my-app';

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  trackByFn(index: number, task: Tasks): number {
    return task.id;
  }

  private getAllCards(): void {
    this.apollo
    .query({
      query: ALLDATA_QUERY,
      variables: { }
    })
    .subscribe(({ data }: any) => {
      this.data = data.allData;
    });
  }

  updateTasks(event: Tasks): void {
    if (event) {
      let objIndex = this.data.findIndex((obj => obj.title == event.title));
    
      if (objIndex !== -1) {
        console.log(event, event.todos);
        this.data[objIndex].todos = [...this.data[objIndex].todos, event.todos[0]]; // ?!
      } else {
        const updateTask = {
          id: event.id,
          title: event.title,
          todos: event.todos
        };

        this.data = [...this.data, updateTask];
      }
    }
  }
}