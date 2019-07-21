import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LifecycleHooksRoutingModule} from './lifecycle-hooks-routing.module';
import {PeekABooComponent} from './peek-a-boo/peek-a-boo.component';
import {LifecycleHooksComponent} from './lifecycle-hooks.component';
import { SpyComponent } from './spy/spy.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { SpyDirective } from './spy.directive';


@NgModule({
  declarations: [
    PeekABooComponent,
    LifecycleHooksComponent,
    SpyComponent,
    PeekABooParentComponent,
    SpyDirective,
  ],
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule
  ]
})
export class LifecycleHooksModule {
}
