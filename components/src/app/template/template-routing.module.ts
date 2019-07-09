import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateSyntaxComponent} from './template-syntax.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {StatementsComponent} from './statements/statements.component';
import {BindingPropretyComponent} from './binding-proprety/binding-proprety.component';
import {BindingOthersComponent} from './binding-others/binding-others.component';
import {BindingEventComponent} from './binding-event/binding-event.component';
import {TwoWayBindingComponent} from './two-way-binding/two-way-binding.component';
import {BuiltInDirectivesComponent} from './built-in-directives/built-in-directives.component';
import {ReferenceVariablesComponent} from './reference-variables/reference-variables.component';
import {ExpressionOperatorsComponent} from './expression-operators/expression-operators.component';
import {SvgComponent} from './svg/svg.component';


const routes: Routes = [
  {
    path: 'template-syntax',
    component: TemplateSyntaxComponent,
    children: [
      {path: 'interpolation', component: InterpolationComponent},
      {path: 'statements', component: StatementsComponent},
      {path: 'binding-property', component: BindingPropretyComponent},
      {path: 'binding-others', component: BindingOthersComponent},
      {path: 'binding-event', component: BindingEventComponent},
      {path: 'two-way-binding', component: TwoWayBindingComponent},
      {path: 'built-in-directives', component: BuiltInDirectivesComponent},
      {path: 'reference-variables', component: ReferenceVariablesComponent},
      {path: 'expression-operators', component: ExpressionOperatorsComponent},
      {path: 'svg', component: SvgComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule {
}
