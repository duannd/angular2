import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-v1',
  templateUrl: './birthday-v1.component.html',
  styles: []
})
export class BirthdayV1Component implements OnInit {

  birthday = new Date(1991, 8, 12);

  constructor() { }

  ngOnInit() {
  }

}
