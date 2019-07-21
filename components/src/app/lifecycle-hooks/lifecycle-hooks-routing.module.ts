import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LifecycleHooksComponent} from './lifecycle-hooks.component';
import {SpyComponent} from './spy/spy.component';
import {PeekABooParentComponent} from './peek-a-boo-parent/peek-a-boo-parent.component';


const routes: Routes = [{
  path: 'lifecycle-hooks',
  component: LifecycleHooksComponent,
  children: [
    {path: 'peek-a-boo', component: PeekABooParentComponent},
    {path: 'spy', component: SpyComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleHooksRoutingModule {
}
