import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./modules/share/guard/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'security', pathMatch: 'full'}
  , {
    path: 'share',
    loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)
  }, {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  }, {
    path: 'console',
    loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule),
    canActivate: [AuthGuard]
  }, {
    path: 'farmer',
    loadChildren: () => import('./modules/farmer/farmer.module').then(m => m.FarmerModule),
    canActivate: [AuthGuard]
  }, {
    path: 'wholesale-buyer',
    loadChildren: () => import('./modules/wholesale-buyer/wholesale-buyer.module').then(m => m.WholesaleBuyerModule),
    canActivate: [AuthGuard]
  }, {
    path: 'retailer', loadChildren: () => import('./modules/retailer/retailer.module').then(m => m.RetailerModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
