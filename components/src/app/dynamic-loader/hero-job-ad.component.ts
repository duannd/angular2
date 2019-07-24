import {Component, Input, OnInit} from '@angular/core';
import {AdComponent} from './ad.component';

@Component({
  selector: 'app-hero-job-ad',
  template: `
      <div class="job-ad">
          <h4>{{data.headline}}</h4>
          {{data.body}}
      </div>
  `,
  styles: []
})
export class HeroJobAdComponent implements OnInit, AdComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
