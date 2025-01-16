import { Component, Input, Output, EventEmitter, inject } from '@angular/core';

import { type ITaskIndividual } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.services';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!: ITaskIndividual
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompleteTask() {
    // this.complete.emit(this.task.id);

    this.tasksService.removeTask(this.task.id);
  }

}
