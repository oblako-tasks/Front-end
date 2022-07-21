import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateTask } from 'src/app/models/create-task';
import { TaskService } from 'src/app/service/task.service';
export interface TaskName {
  id: number;
  title: string;
}
export interface DialogDataTask {
  titles: TaskName[];
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public selectedCategory: string = '';
  public createdTextTodo: string = '';
  public createdTextTask: string = '';
  public task: CreateTask | undefined;

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataTask,
    private tasksService: TaskService
  ) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTodo(): void {
    if (this.selectedCategory !== 'new') {
      this.task = {
        "task": {
          "title": this.selectedCategory
        },
        "todos": {
          "text": this.createdTextTodo,
          "isCompleted": false
        }
      }
    } else {
      this.task = {
        "task": {
          "title": this.createdTextTask
        },
        "todos": {
          "text": this.createdTextTodo,
          "isCompleted": false
        }
      }
    }
    
    this.tasksService.saveTask(this.task).subscribe(() => { });

    this.dialogRef.close();
  }
}