import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tasks } from 'src/app/models/tasks';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public data: Tasks[] = [];

  @Output()
  public childEvent = new EventEmitter();
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const titleTasks = this.data.map(({ id, title }) => ({ id, title, }))
    
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '375px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {titles: titleTasks}
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.childEvent.emit(result);
    });
  }
}