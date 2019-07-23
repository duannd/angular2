import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  template: `
    <a [routerLink]="['pass-data']"><span>Pass data from parent to child with input binding</span></a>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class InteractionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
