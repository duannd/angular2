import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InteractionComponent} from './interaction.component';
import {HeroParentComponent} from './hero-parent.component';
import {NameParentComponent} from './name-parent.component';
import {VersionParentComponent} from './version-parent.component';
import {VoteTakerComponent} from './vote-taker.component';


const routes: Routes = [
  {
    path: 'component-interaction',
    component: InteractionComponent,
    children: [
      {path: 'pass-data', component: HeroParentComponent},
      {path: 'intercept-by-setter', component: NameParentComponent},
      {path: 'intercept-by-onchange', component: VersionParentComponent},
      {path: 'listen-child-event', component: VoteTakerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule {
}
