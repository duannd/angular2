import {Component, OnInit} from '@angular/core';
import {AdItem} from './ad-item';
import {AdService} from './ad.service';

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.css']
})
export class DynamicLoaderComponent implements OnInit {

  adItems: AdItem[];

  constructor(private adService: AdService) {
  }

  ngOnInit() {
    this.adItems = this.adService.getAds();
  }

}
