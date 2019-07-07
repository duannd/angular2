import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateSyntaxComponent} from './template-syntax.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {StatementsComponent} from './statements/statements.component';
import {BindingPropretyComponent} from './binding-proprety/binding-proprety.component';
import {BindingOthersComponent} from './binding-others/binding-others.component';
import {BindingEventComponent} from './binding-event/binding-event.component';


const routes: Routes = [
  {
    path: 'template-syntax',
    component: TemplateSyntaxComponent,
    children: [
      {path: 'interpolation', component: InterpolationComponent},
      {path: 'statements', component: StatementsComponent},
      {path: 'binding-property', component: BindingPropretyComponent},
      {path: 'binding-others', component: BindingOthersComponent},
      {path: 'binding-event', component: BindingEventComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule {
}
