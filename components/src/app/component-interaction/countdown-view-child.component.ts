import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from './countdown-timer.component';

@Component({
  selector: 'app-countdown-view-child',
  template: `
      <h3>Countdown to Liftoff (via ViewChild)</h3>
      <button (click)="start()">Start</button>
      <button (click)="stop()">Stop</button>
      <div class="seconds">{{ seconds() }}</div>
      <app-countdown-timer></app-countdown-timer>
  `,
  styles: []
})
export class CountdownViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild(CountdownTimerComponent, {static: false})
  private timerComponent: CountdownTimerComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => {
      this.seconds = () => this.timerComponent.seconds;
    }, 0);
  }

  seconds() {
    return 0;
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

}
