import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: []
})
export class InterpolationComponent implements OnInit {

  currentCustomer: string;
  count: number;

  constructor() {
  }

  ngOnInit() {
    this.count = 0;
    this.currentCustomer = 'Danny';
    setInterval(() => {
      this.count++;
    }, 1000);
  }

  getVal() {
    return 3;
  }

}
