import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PipesComponent} from './pipes.component';
import {BirthdayV1Component} from './birthday-v1/birthday-v1.component';
import {BirthdayV2Component} from './birthday-v2/birthday-v2.component';


const routes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent,
    children: [
      {path: 'birthday-v1', component: BirthdayV1Component},
      {path: 'birthday-v2', component: BirthdayV2Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule {
}
