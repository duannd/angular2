import {NgModule} from '@angular/core';

import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';
import {CrisisHomeComponent} from './crisis-home/crisis-home.component';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisCenterComponent,
    CrisisDetailComponent,
    CrisisHomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule {
}
