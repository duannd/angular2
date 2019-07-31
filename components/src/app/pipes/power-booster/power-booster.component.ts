import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-power-booster',
  templateUrl: './power-booster.component.html',
  styles: [],
})
export class PowerBoosterComponent implements OnInit {

  power = 5;
  factor = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
