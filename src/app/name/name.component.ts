import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})

export class NameComponent {
  name: string = '';
  gender: string;
  hobby: string;
  check: boolean = false;
  age: string;

  constructor() {
    // this.gender = 'Male';
    this.hobby = 'I enjoy playing the guitar!';
    this.age = '25';

    setTimeout( () => {
      console.log('Wait');
      this.check = true;
      this.age = '30';
    } ,5000);
  }

  onPressClicked() {
    console.log('User clicked me!');
  }

  userInput(event: Event) {
    //console.log(event);
    this.name = (<HTMLInputElement>event.target).value;
  }

}

