import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-displaying-data',
  templateUrl: './displaying-data.component.html',
  styleUrls: ['./displaying-data.component.css']
})
export class DisplayingDataComponent implements OnInit {

  heroes: Hero[] = [
    {id: 1, name: 'Danny'},
    new Hero(2, 'Athena'),
    new Hero(3, 'Zeus'),
    new Hero(4, 'Bill')
  ];

  constructor() { }

  ngOnInit() {
  }

}
