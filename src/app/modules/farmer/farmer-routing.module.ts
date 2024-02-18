import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FarmerComponent} from './farmer.component';
import {FarmerDefaultComponent} from "./components/farmer-default/farmer-default.component";
import {FarmerPlaygroundComponent} from "./components/farmer-playground/farmer-playground.component";
import {BlogComponent} from "../share/components/blog/blog.component";

const routes: Routes = [{
  path: '', component: FarmerComponent, children: [
    {
      path: 'playground', component: FarmerPlaygroundComponent, children: [
        {path: '', redirectTo: '/farmer/playground/home', pathMatch: 'full'},
        {path: 'home', component: FarmerDefaultComponent},
        {path: 'blog', component: BlogComponent},
        {
          path: 'sales',
          loadChildren: () => import('./modules/farmer-sales/farmer-sales.module').then(m => m.FarmerSalesModule)
        }, {
          path: 'listing',
          loadChildren: () => import('./modules/farmer-listing/farmer-listing.module').then(m => m.FarmerListingModule)
        }

      ]
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule {
}
