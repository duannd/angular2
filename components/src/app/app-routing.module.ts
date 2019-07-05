import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayingDataComponent} from './displaying-data/displaying-data.component';


const routes: Routes = [
  {path: '', redirectTo: 'displaying-data', pathMatch: 'full'},
  {path: 'displaying-data', component: DisplayingDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
