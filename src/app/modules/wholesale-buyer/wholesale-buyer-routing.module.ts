import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WholesaleBuyerComponent} from './wholesale-buyer.component';
import {
  WholesaleBuyerPlaygroundComponent
} from "./components/wholesale-buyer-playground/wholesale-buyer-playground.component";
import {WholesaleBuyerDefaultComponent} from "./components/wholesale-buyer-default/wholesale-buyer-default.component";
import {BlogContextComponent} from "../share/components/blog/blog-context/blog-context.component";
import {BlogListComponent} from "../share/components/blog/blog-list/blog-list.component";
import {BlogViewComponent} from "../share/components/blog/blog-view/blog-view.component";
import {ShopContextComponent} from "../share/components/shop/shop-context/shop-context.component";
import {ShopProductListComponent} from "../share/components/shop/shop-product-list/shop-product-list.component";
import {ShopProductViewComponent} from "../share/components/shop/shop-product-view/shop-product-view.component";

const routes: Routes = [{
  path: '', component: WholesaleBuyerComponent, children: [
    {
      path: 'playground', component: WholesaleBuyerPlaygroundComponent, children: [
        {path: '', redirectTo: '/wholesale-buyer/playground/home', pathMatch: 'full'},
        {path: 'home', component: WholesaleBuyerDefaultComponent},
        {
          path: 'blog', component: BlogContextComponent, children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'list', component: BlogListComponent},
            {path: 'view', component: BlogViewComponent},
          ]
        },
        {
          path: 'shop', component: ShopContextComponent, children: [
            {path: '', redirectTo: 'product-list', pathMatch: 'full'},
            {path: 'product-list', component: ShopProductListComponent},
            {path: 'product-view', component: ShopProductViewComponent},
          ]
        },
        {
          path: 'listing',
          loadChildren: () => import('./modules/wholesale-buyer-listings/wholesale-buyer-listings.module').then(m => m.WholesaleBuyerListingsModule)
        },

      ]
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleBuyerRoutingModule {
}
