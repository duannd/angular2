import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {FormValidationComponent} from './form-validation/form-validation.component';
import {DynamicFormsComponent} from './dynamic-forms/dynamic-forms.component';


const routes: Routes = [
  {path: '', redirectTo: 'form-validation', pathMatch: 'full'},
  {path: 'reactive-forms', component: ReactiveFormComponent},
  {path: 'template-driven-forms', component: HeroFormComponent},
  {path: 'form-validation', component: FormValidationComponent},
  {path: 'dynamic-forms', component: DynamicFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
