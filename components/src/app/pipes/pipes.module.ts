import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PipesRoutingModule} from './pipes-routing.module';
import {BirthdayV1Component} from './birthday-v1/birthday-v1.component';
import {PipesComponent} from './pipes.component';
import { BirthdayV2Component } from './birthday-v2/birthday-v2.component';


@NgModule({
  declarations: [
    PipesComponent,
    BirthdayV1Component,
    BirthdayV2Component,
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule {
}
