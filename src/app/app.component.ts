import { Component } from '@angular/core';
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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllCards();
    this.taskService.getTasks().subscribe(() => {this.getAllCards()});
  }

  private getAllCards() {
    this.taskService.getTasks().subscribe(cards => this.data = cards);
  }

  updateTasks(event: any) {
    this.ngOnInit();
  }
}