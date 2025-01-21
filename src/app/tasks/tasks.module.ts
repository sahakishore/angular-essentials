import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ], // declare all the components that makeup our tasks feature, so all the tasks related components that need to work together
  exports: [TasksComponent], // 'TasksComponent' is exported bcz it's being used by the 'app.component.html' that is app component
  imports: [ CommonModule, FormsModule, SharedModule,] // import other modules that are required by this module
})
export class TasksModule { }
