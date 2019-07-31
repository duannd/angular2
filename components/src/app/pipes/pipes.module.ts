import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PipesRoutingModule} from './pipes-routing.module';
import {BirthdayV1Component} from './birthday-v1/birthday-v1.component';
import {PipesComponent} from './pipes.component';
import {BirthdayV2Component} from './birthday-v2/birthday-v2.component';
import {PowerBoosterComponent} from './power-booster/power-booster.component';
import {FormsModule} from '@angular/forms';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';


@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    PipesComponent,
    BirthdayV1Component,
    BirthdayV2Component,
    PowerBoosterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesRoutingModule,
  ]
})
export class PipesModule {
}
