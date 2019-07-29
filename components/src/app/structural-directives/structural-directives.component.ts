import {Component, OnInit} from '@angular/core';
import {Hero, HEROES} from '../hero';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  hero: Hero = this.heroes[0];
  condition: boolean;

  constructor() {
  }

  ngOnInit() {
    this.condition = true;
  }

  trackById(index: number, hero: Hero): number {
    return hero.id;
  }
}
