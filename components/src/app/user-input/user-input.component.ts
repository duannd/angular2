import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styles: []
})
export class UserInputComponent implements OnInit {

  clickMessage = '';

  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
