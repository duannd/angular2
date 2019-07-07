import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {

  parentItem = 'lamp';
  allItems = ['book', 'pen', 'pencil', 'phone'];

  constructor() {
  }

  ngOnInit() {
  }

}
