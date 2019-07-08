import {Component, OnInit} from '@angular/core';
import {Hero, HEROES} from '../../hero';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styles: [
      `.special {
      color: blue;
    }`,
      `.saveable {
      color: blueviolet;
    }`,
      `.modified {
      color: red;
    }`
  ]
})
export class BuiltInDirectivesComponent implements OnInit {

  isSpecial = false;
  currentClasses: {};
  currentStyles: {};
  count = 0;

  myName: string;
  myNameUpperCase: string;
  items: Hero[];

  constructor() {
  }

  ngOnInit() {
    this.items = HEROES;
    setInterval(() => {
      this.isSpecial = !this.isSpecial;
      this.count++;
      this.setCurrentClasses();
      this.setCurrentStyles();
    }, 3000);
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.count % 3 === 0,
      modified: this.count % 3 === 1,
      special: this.count % 3 === 2
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.count % 3 === 0 ? 'italic' : 'normal',
      'font-weight': this.count % 3 === 1 ? 'bold' : 'normal',
      'font-size': this.count % 3 === 2 ? '24px' : '12px'
    };
  }

  upperCaseName(event) {
    this.myNameUpperCase = event.toUpperCase();
  }

  trackByItems(index: number, item: Hero): number {
    return item.id;
  }

  countRemain(): number {
    return this.count % 4;
  }

}
