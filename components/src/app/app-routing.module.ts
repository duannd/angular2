import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayingDataComponent} from './displaying-data/displaying-data.component';
import {UserInputComponent} from './user-input/user-input.component';
import {DynamicLoaderComponent} from './dynamic-loader/dynamic-loader.component';
import {AngularElementsComponent} from './angular-elements/angular-elements.component';


const routes: Routes = [
  {path: '', redirectTo: 'displaying-data', pathMatch: 'full'},
  {path: 'displaying-data', component: DisplayingDataComponent},
  {path: 'user-input', component: UserInputComponent},
  {path: 'dynamic-components', component: DynamicLoaderComponent},
  {path: 'angular-elements', component: AngularElementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
