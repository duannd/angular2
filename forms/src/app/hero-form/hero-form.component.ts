import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {AUTHOR} from '../constants';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styles: []
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, AUTHOR, this.powers[1], 'Chuck Overstreet');
  submitted = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
