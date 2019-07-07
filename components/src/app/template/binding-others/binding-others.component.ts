import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-others',
  templateUrl: './binding-others.component.html',
  styles: []
})
export class BindingOthersComponent implements OnInit {

  actionName: string;
  resetClasses: string;
  itemClearance = true;
  isSpecial = false;
  canSave = true;

  constructor() { }

  ngOnInit() {
    this.actionName = 'Create';
    this.resetClasses = 'reset-color';
    setInterval(() => {
      this.isSpecial = !this.isSpecial;
      this.canSave = !this.canSave;
    }, 5000);
  }

}
