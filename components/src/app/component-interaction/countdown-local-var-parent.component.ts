import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-local-var-parent',
  template: `
      <h3>Countdown to Liftoff (via local variable)</h3>
      <button (click)="timer.start()">Start</button>
      <button (click)="timer.stop()">Stop</button>
      <div class="seconds">{{timer.seconds}}</div>
      <app-countdown-timer #timer></app-countdown-timer>
  `,
  styles: []
})
export class CountdownLocalVarParentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
