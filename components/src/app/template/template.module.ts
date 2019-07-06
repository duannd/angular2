import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TemplateRoutingModule} from './template-routing.module';
import {TemplateSyntaxComponent} from './template-syntax.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import { StatementsComponent } from './statements/statements.component';


@NgModule({
  declarations: [
    TemplateSyntaxComponent,
    InterpolationComponent,
    StatementsComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule {
}
