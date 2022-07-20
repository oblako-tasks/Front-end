import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public data = [
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
  public selectedCategory: string = '';

  constructor(public dialogRef: MatDialogRef<CreateComponent>) {}

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTodo(): void {

  }
}