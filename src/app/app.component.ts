import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tasks = [
    {
      id: 1,
      name: 'Семья',
    },
    {
      id: 2,
      name: 'Работа',
    },
    {
      id: 3,
      name: 'Прочее',
    }
  ];

  title = 'my-app';
}
