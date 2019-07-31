import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PipesComponent} from './pipes.component';
import {BirthdayV1Component} from './birthday-v1/birthday-v1.component';
import {BirthdayV2Component} from './birthday-v2/birthday-v2.component';
import {PowerBoosterComponent} from './power-booster/power-booster.component';
import {FlyingHeroesComponent} from './flying-heroes/flying-heroes.component';
import {FlyingHeroesImpureComponent} from './flying-heroes-impure/flying-heroes-impure.component';


const routes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent,
    children: [
      {path: 'birthday-v1', component: BirthdayV1Component},
      {path: 'birthday-v2', component: BirthdayV2Component},
      {path: 'custom-pipes', component: PowerBoosterComponent},
      {path: 'pure-pipes', component: FlyingHeroesComponent},
      {path: 'impure-pipes', component: FlyingHeroesImpureComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule {
}
