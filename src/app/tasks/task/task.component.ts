import { Component, Input, inject } from '@angular/core';

import { type ITaskIndividual } from './task.model';
import { TasksService } from '../tasks.services';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!: ITaskIndividual

  private tasksService = inject(TasksService);

  onCompleteTask() {

    this.tasksService.removeTask(this.task.id);
  }

}
