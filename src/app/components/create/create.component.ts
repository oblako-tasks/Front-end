import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
 
  public form: FormGroup = new FormGroup('', []);


  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataTask,
    private tasksService: TaskService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      taskName: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      newCategory: new FormControl('', [ Validators.required, Validators.minLength(3) ])
    });
    
    this.form.get('newCategory')?.disable();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngDoCheck(): void {
    if(this.selectedCategory === 'nw') {
      this.form.get('newCategory')?.enable();
    }
  }

  createTodo() {
    if(this.form.valid) {
      if (this.selectedCategory !== 'nw') {
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
      
      this.tasksService.saveTask(this.task).subscribe((result) => {
        this.dialogRef.close(result);
      });
    } else {
      return;
    }
  }
}