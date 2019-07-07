import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TemplateRoutingModule} from './template-routing.module';
import {TemplateSyntaxComponent} from './template-syntax.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import { StatementsComponent } from './statements/statements.component';
import { BindingPropretyComponent } from './binding-proprety/binding-proprety.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    TemplateSyntaxComponent,
    InterpolationComponent,
    StatementsComponent,
    BindingPropretyComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule {
}
