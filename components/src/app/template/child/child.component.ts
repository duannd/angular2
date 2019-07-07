import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

  @Input() childItem: string;
  @Input() items: string[];

  constructor() { }

  ngOnInit() {
  }

}
