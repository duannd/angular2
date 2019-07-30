import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PipesComponent} from './pipes.component';
import {BirthdayV1Component} from './birthday-v1/birthday-v1.component';


const routes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent,
    children: [
      {path: 'birthday-v1', component: BirthdayV1Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule {
}
