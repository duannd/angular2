import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
    data: {preload: true}
  },
  {path: '', redirectTo: '/superheroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, preloadingStrategy: SelectivePreloadingStrategyService
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
