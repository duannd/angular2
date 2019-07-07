import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styles: []
})
export class BindingEventComponent implements OnInit {

  clickMessage: any;
  currentItem = {name: 'IPhone'};

  constructor() {
  }

  ngOnInit() {
  }

  onSave(event) {
    console.log(`Button Save onclick id=${event.target.id}`);
  }

  onDeleteRequest(event) {
    console.log(`Parent Component Emit a event: ${event}`);
  }

}
