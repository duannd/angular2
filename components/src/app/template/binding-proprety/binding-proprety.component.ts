import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-proprety',
  templateUrl: './binding-proprety.component.html',
  styles: [
    `.text-blue {
      color: blue;
    }`
  ]
})
export class BindingPropretyComponent implements OnInit {

  itemImageUrl: string;
  classes: string;
  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';

  constructor() { }

  ngOnInit() {
    this.classes = 'text-blue';
  }

}
