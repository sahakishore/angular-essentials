import { Component, computed, Input, input, Output, EventEmitter, output } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  //decorator approach
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  //output property approach, custom event, it's not a signal unlike input, this is new approach
  // select = output<string>();

  //output property approach, custom event
  @Output() select = new EventEmitter<string>();

  // input function approach, single bases input
  // avatar = input.required<string>();
  // name = input.required<string>();

  //computed approach
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  //get function approach
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

    onSelectUser() {
    this.select.emit(this.id);
    }


}
