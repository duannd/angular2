import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeekABooComponent} from './peek-a-boo/peek-a-boo.component';
import {LifecycleHooksComponent} from './lifecycle-hooks.component';
import {SpyComponent} from './spy/spy.component';


const routes: Routes = [{
  path: 'lifecycle-hooks',
  component: LifecycleHooksComponent,
  children: [
    {path: 'peek-a-boo', component: PeekABooComponent},
    {path: 'spy', component: SpyComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleHooksRoutingModule {
}
