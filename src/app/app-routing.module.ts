import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'security', pathMatch:'full'}
  ,{
  path: 'share',
  loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)
}, {
  path: 'security',
  loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
}, {
  path: 'console',
  loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule)
}, {
  path: 'farmer',
  loadChildren: () => import('./modules/farmer/farmer.module').then(m => m.FarmerModule)
}, {
  path: 'wholesale-buyer',
  loadChildren: () => import('./modules/wholesale-buyer/wholesale-buyer.module').then(m => m.WholesaleBuyerModule)
}, {path: 'retailer', loadChildren: () => import('./modules/retailer/retailer.module').then(m => m.RetailerModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
