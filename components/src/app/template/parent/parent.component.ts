import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {

  parentItem = 'lamp';
  allItems = ['book', 'pen', 'pencil', 'phone'];

  // This component makes a request but it can't actually delete a hero.
  @Output() deleteRequest = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    console.log('Delete Btn onClick');
    this.deleteRequest.emit('Hello World');
  }

}
