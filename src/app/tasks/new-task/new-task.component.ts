import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();

  @Output() addTask = new EventEmitter<NewTaskData>();

  //two way binding

  // store the title putting in the input field of the form with id "title"
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //using signal for inputs for two way binding
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel(){
   this.cancel.emit();
  }

  onSubmitForm(){
    console.log('submitted');
    console.log(this.enteredTitle);
    console.log(this.enteredSummary);
    console.log(this.enteredDate);

    //emit the event
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
     });


  }

}
