import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';
import {CanDeactivateGuard} from '../can-deactivate.guard';
import {CrisisDetailResolverService} from './crisis-detail-resolver.service';
import {CrisisHomeComponent} from './crisis-home/crisis-home.component';


const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolverService
            }
          },
          {
            path: '', component: CrisisHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {
}
