import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-birthday-v2',
  template: `
      <h2>Duan's Birthday v2</h2>
      <p>The Duan's birthday is {{birthday | date: format}}</p>
      <button (click)="toggleFormat()">Toggle Format</button>
      <hr/>
      <h2>Birthday Pipe Chaining</h2>
      <p>The chained hero's birthday is {{ birthday | date | uppercase}}</p>
      <p>The chained hero's birthday is {{ birthday | date: format | uppercase}}</p>
      <p>The chained hero's birthday is {{ (birthday | date: format) | uppercase}}</p>
  `,
  styles: []
})
export class BirthdayV2Component implements OnInit {

  birthday = new Date(1991, 8, 12);
  toggle = true;

  constructor() {
  }

  ngOnInit() {
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

}
