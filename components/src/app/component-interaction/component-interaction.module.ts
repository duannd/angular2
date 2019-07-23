import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentInteractionRoutingModule} from './component-interaction-routing.module';
import { InteractionComponent } from './interaction.component';
import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';


@NgModule({
  declarations: [
    InteractionComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent,
  ],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule
  ]
})
export class ComponentInteractionModule {
}
