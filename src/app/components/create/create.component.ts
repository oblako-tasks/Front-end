import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import { ALLDATA_QUERY, CREATETASK_MUTATION } from 'src/app/graphql';
import { CreateTask } from 'src/app/models/create-task';

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
    private apollo: Apollo
  ) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTodo(): void {
    if (this.selectedCategory !== 'new') {
      this.task = {
        task: {
          title: this.selectedCategory
        },
        todos: {
          text: this.createdTextTodo,
          isCompleted: false
        }
      }
    } else {
      this.task = {
        task: {
          title: this.createdTextTask
        },
        todos: {
          text: this.createdTextTodo,
          isCompleted: false
        }
      }
    }

    this.apollo
    .mutate({
      mutation: CREATETASK_MUTATION,
      variables: {
        data: this.task
      },
      update: (store, { data }: any) => {
        let result : any = store.readQuery({
          query: ALLDATA_QUERY
        });
        
        let cached = {
          allData: [...result.allData, data.createTask]
        };

        store.writeQuery({
          query: ALLDATA_QUERY,
          data: cached
        });
      }
    })
    .subscribe(({data} : any) => {
      this.dialogRef.close(data.createTask);
    });
  }
}