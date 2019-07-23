import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: `<p>{{name}}</p>`,
  styles: []
})
export class NameChildComponent implements OnInit {

  private _name = '';

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name() {
    return this._name;
  }

}
