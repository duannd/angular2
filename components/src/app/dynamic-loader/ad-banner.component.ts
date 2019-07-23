import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AdItem} from './ad-item';
import {AdDirective} from './ad.directive';

@Component({
  selector: 'app-ad-banner',
  template: `
      <div class="ad-banner-example">
          <h3>Advertisements</h3>
          <ng-template appAd></ng-template>
      </div>
  `,
  styles: []
})
export class AdBannerComponent implements OnInit {

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true})
  adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

  }

}
