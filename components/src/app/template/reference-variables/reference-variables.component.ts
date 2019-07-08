import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reference-variables',
  templateUrl: './reference-variables.component.html',
  styles: []
})
export class ReferenceVariablesComponent implements OnInit {

  phoneNumber: string;
  submitMessage = 'Name is required';

  constructor() {
  }

  ngOnInit() {
  }

  callPhone(phone) {
    this.phoneNumber = phone;
  }

  onSubmit(form) {

  }

  callFax(fax) {
    console.log(`Fax Input: ${fax}`);
  }

}
