import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateSyntaxComponent} from './template-syntax.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {StatementsComponent} from './statements/statements.component';


const routes: Routes = [
  {
    path: 'template-syntax',
    component: TemplateSyntaxComponent,
    children: [
      {path: 'interpolation', component: InterpolationComponent},
      {path: 'statements', component: StatementsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule {
}
