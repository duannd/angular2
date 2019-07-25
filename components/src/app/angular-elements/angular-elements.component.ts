import {Component, Injector, OnInit} from '@angular/core';
import {PopupService} from './popup.service';
import {createCustomElement} from '@angular/elements';
import {PopupComponent} from './popup.component';

@Component({
  selector: 'app-angular-elements',
  templateUrl: './angular-elements.component.html',
  styles: []
})
export class AngularElementsComponent implements OnInit {

  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  ngOnInit() {
  }

}
