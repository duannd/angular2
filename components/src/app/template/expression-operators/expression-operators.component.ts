import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-operators',
  templateUrl: './expression-operators.component.html',
  styles: []
})
export class ExpressionOperatorsComponent implements OnInit {

  title = 'Template Expression Operators';
  item = {
    'name': 'Telephone',
    'manufactureDate': '1980-02-25T05:00:00.000Z',
    'price': 98
  };

  constructor() { }

  ngOnInit() {

  }

}
