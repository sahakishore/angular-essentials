import { Component, computed, Input, input, Output, EventEmitter, output } from '@angular/core';

import { type IUser } from './user.model';
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})


export class UserComponent {


  //decorator approach
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) user! : IUser;

  //output property approach, custom event, it's not a signal unlike input, this is new approach
  // select = output<string>();

  //output property approach, custom event
  @Output() select = new EventEmitter<string>();

  @Input({required:true}) selected! : boolean ;

  // input function approach, single bases input
  // avatar = input.required<string>();
  // name = input.required<string>();

  //computed approach
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  //get function approach
  get imagePath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

    onSelectUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
    // this.select.emit(this.name);
    }


}
