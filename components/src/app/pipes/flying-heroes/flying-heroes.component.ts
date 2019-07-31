import {Component, OnInit} from '@angular/core';
import {Flyer, FLYERS} from '../flyer';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styles: [
    '#flyers, #all {font-style: italic}',
  ]
})
export class FlyingHeroesComponent implements OnInit {

  heroes: Flyer[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';

  constructor() {
  }

  ngOnInit() {
    this.heroes = FLYERS;
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    let hero = {name, canFly: this.canFly};
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      // Impure pipe will display
      this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() {
    this.heroes = FLYERS.slice();
  }
}
