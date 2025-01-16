import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId!: string;

  // @Output() cancel = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  // @Output() addTask = new EventEmitter<NewTaskData>();

  //two way binding

  // store the title putting in the input field of the form with id "title"
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //using signal for inputs for two way binding
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');


  private tasksService= inject(TasksService);

  onCancel(){
  //  this.cancel.emit();
   this.close.emit();
  }

  onSubmitForm(){
    console.log('submitted');
    console.log(this.enteredTitle);
    console.log(this.enteredSummary);
    console.log(this.enteredDate);

    //emit the event
    // this.addTask.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    //  });

    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);

    this.close.emit();

  }

}
