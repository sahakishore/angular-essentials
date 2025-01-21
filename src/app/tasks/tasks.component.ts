import { Component, Input } from '@angular/core';

import { TasksService } from './tasks.services';
@Component({
  selector: 'app1-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  // @Input() name?:string;
  // @Input() name: string | undefined;
  @Input({required: true}) userIdIncoming!: string; //this is userId


  isAddingTask = false;

  //creating instance of TasksService class
  // private tasksService = new TasksService();

  // through dependency injection, we can inject the TasksService class into the constructor
  private tasksService: TasksService;


  // angular "Dependency Injection" to inject the TasksService class, we tell Angular which type of value we need and Angular creates it and provides it as an argument to the constructor
  constructor(tasksService: TasksService){
  // constructor(private tasksService: TasksService){ // typescript shortcut
    this.tasksService = tasksService;
  }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userIdIncoming);
  }

  // onCompleteTask(taskId: string) {
  //   console.log('Completed task with id: ' + taskId);
  //   this.tasksService.removeTask(taskId);
  // }

  // onAddTask() {
  //   this.tasks.push({
  //     id: 't4',
  //     userId: 'u1',
  //     title: 'New task',
  //     summary: 'This is a new task',
  //     dueDate: '2025-12-31',
  //   });
  // }

  onStartAddTask(){
    console.log('Add task button clicked');
    this.isAddingTask = true;
  }

  // onCancelAddTask(){
    onCloseAddTask(){
    console.log('Cancel button clicked');
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   console.log('Task added');
  //   console.log(taskData);
  //   // this.tasks.unshift({
  //   //   id: new Date().toISOString(),
  //   //   userId: this.userIdIncoming,
  //   //   title: taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date,
  //   // });

  //   //close the form

  //   this.isAddingTask = false;
  // }

}
