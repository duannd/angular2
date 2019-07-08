import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TemplateRoutingModule} from './template-routing.module';
import {TemplateSyntaxComponent} from './template-syntax.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import { StatementsComponent } from './statements/statements.component';
import { BindingPropretyComponent } from './binding-proprety/binding-proprety.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { BindingOthersComponent } from './binding-others/binding-others.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { SizerComponent } from './sizer/sizer.component';
import {FormsModule} from '@angular/forms';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { ReferenceVariablesComponent } from './reference-variables/reference-variables.component';


@NgModule({
  declarations: [
    TemplateSyntaxComponent,
    InterpolationComponent,
    StatementsComponent,
    BindingPropretyComponent,
    ChildComponent,
    ParentComponent,
    BindingOthersComponent,
    BindingEventComponent,
    TwoWayBindingComponent,
    SizerComponent,
    BuiltInDirectivesComponent,
    ReferenceVariablesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
  ]
})
export class TemplateModule {
}
