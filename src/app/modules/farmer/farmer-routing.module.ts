import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FarmerComponent} from './farmer.component';
import {FarmerDefaultComponent} from "./components/farmer-default/farmer-default.component";
import {FarmerPlaygroundComponent} from "./components/farmer-playground/farmer-playground.component";
import {BlogContextComponent} from "../share/components/blog/blog-context/blog-context.component";
import {BlogListComponent} from "../share/components/blog/blog-list/blog-list.component";
import {BlogViewComponent} from "../share/components/blog/blog-view/blog-view.component";

const routes: Routes = [{
  path: '', component: FarmerComponent, children: [
    {
      path: 'playground', component: FarmerPlaygroundComponent, children: [
        {path: '', redirectTo: '/farmer/playground/home', pathMatch: 'full'},
        {path: 'home', component: FarmerDefaultComponent},
        {
          path: 'blog', component: BlogContextComponent, children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'list', component: BlogListComponent},
            {path: 'view', component: BlogViewComponent},
          ]
        },
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
