import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {HeroFormComponent} from './hero-form/hero-form.component';


const routes: Routes = [
  {path: 'reactive-forms', component: ReactiveFormComponent},
  {path: 'template-driven-forms', component: HeroFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
