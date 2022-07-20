import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public todos = [
    {
      id: 1,
      text: 'Заплатить за квартиру',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Заплатить за квартиру',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Заплатить за квартиру',
      isCompleted: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatusTodo() {
    
  }
}