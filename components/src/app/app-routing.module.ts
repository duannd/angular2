import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayingDataComponent} from './displaying-data/displaying-data.component';
import {UserInputComponent} from './user-input/user-input.component';
import {DynamicLoaderComponent} from './dynamic-loader/dynamic-loader.component';
import {AngularElementsComponent} from './angular-elements/angular-elements.component';
import {AttributeDirectivesComponent} from './attribute-directives/attribute-directives.component';
import {StructuralDirectivesComponent} from './structural-directives/structural-directives.component';


const routes: Routes = [
  {path: '', redirectTo: 'displaying-data', pathMatch: 'full'},
  {path: 'displaying-data', component: DisplayingDataComponent},
  {path: 'user-input', component: UserInputComponent},
  {path: 'dynamic-components', component: DynamicLoaderComponent},
  {path: 'angular-elements', component: AngularElementsComponent},
  {path: 'attribute-directives', component: AttributeDirectivesComponent},
  {path: 'structural-directives', component: StructuralDirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
