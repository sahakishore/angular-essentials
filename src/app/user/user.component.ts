import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //  selectedUser = DUMMY_USERS[randomIndex];
   selectedUser = signal(DUMMY_USERS[randomIndex]);

   //computed property/value using signal
   imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);

   //getter
  //  get imagePath() {
  //     return 'assets/users/' + this.selectedUser.avatar
  //  }



   //user event handler method
    onSelectUser() {
        console.log('User clicked');
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        //state change
        // this.selectedUser = DUMMY_USERS[randomIndex];

        //signal value change by set method
        this.selectedUser.set(DUMMY_USERS[randomIndex]);
    }

  // constructor() {
  //   console.log('UserComponent constructor');
  // }

  // ngOnInit() {
  //   console.log('UserComponent ngOnInit');
  // }

  // ngOnDestroy() {
  //   console.log('UserComponent ngOnDestroy');
  // }

  // ngOnChanges() {
  //   console.log('UserComponent ngOnChanges');
  // }

  // ngDoCheck() {
  //   console.log('UserComponent ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('UserComponent ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log('UserComponent ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('UserComponent ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('UserComponent ngAfterViewChecked');
  // }

}
