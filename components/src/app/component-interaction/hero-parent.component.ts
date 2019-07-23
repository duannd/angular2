import { Component, OnInit } from '@angular/core';
import {Hero, HEROES} from '../hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h3>{{masterName}} controls {{heroes.length}} heroes</h3>
    <app-hero-child *ngFor="let hero of heroes" [hero]="hero" [master]="masterName"></app-hero-child>
  `,
  styles: []
})
export class HeroParentComponent implements OnInit {

  masterName: string;
  heroes: Hero[];

  constructor() { }

  ngOnInit() {
    this.masterName = 'Duan Nguyen';
    this.heroes = HEROES;
  }

}
