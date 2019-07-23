import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  template: `
    <div>
        <a [routerLink]="['pass-data']"><span>Pass data from parent to child with input binding</span></a>
        <a [routerLink]="['intercept-by-setter']"><span>Intercept input property changes with a setter</span></a>
        <a [routerLink]="['intercept-by-onchange']"><span>Intercept input property changes with ngOnChanges()</span></a>
    </div>
    <div>
        <a [routerLink]="['listen-child-event']"><span>Parent listens for child event</span></a>
        <a routerLink="interacts-child-via-local-variable"><span>Parent interacts with child via local variable</span></a>
        <a routerLink="call-an-view-child"><span>Parent calls an @ViewChild()</span></a>
        <a routerLink="communicate-via-a-service"><span>Parent and children communicate via a service</span></a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class InteractionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
