import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styles: []
})
export class StatementsComponent implements OnInit {

  myName: string;

  constructor() { }

  ngOnInit() {
  }

  showMyName() {
    this.myName = 'Nguyen Dinh Duan';
  }

}
