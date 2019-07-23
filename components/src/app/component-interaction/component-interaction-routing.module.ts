import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InteractionComponent} from './interaction.component';
import {HeroParentComponent} from './hero-parent.component';


const routes: Routes = [
  {
    path: 'component-interaction',
    component: InteractionComponent,
    children: [
      {path: 'pass-data', component: HeroParentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule {
}
