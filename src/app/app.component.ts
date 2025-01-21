import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  // selectedUser: string | null = null;

  // selectedUserId = 'u1';
  selectedUserId? :string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }


  onSelectUser(id: string) {
    console.log('Selected user id: ' + id);
    // this.selectedUser = id;
    // this.selectedUser = DUMMY_USERS.find((user) => user.id === id)?.name || null;
    this.selectedUserId = id;
  }
}
