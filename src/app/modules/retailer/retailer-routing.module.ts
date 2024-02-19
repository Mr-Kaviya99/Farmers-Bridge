import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RetailerComponent} from './retailer.component';
import {BlogContextComponent} from "../share/components/blog/blog-context/blog-context.component";
import {BlogListComponent} from "../share/components/blog/blog-list/blog-list.component";
import {BlogViewComponent} from "../share/components/blog/blog-view/blog-view.component";
import {ShopContextComponent} from "../share/components/shop/shop-context/shop-context.component";
import {ShopProductListComponent} from "../share/components/shop/shop-product-list/shop-product-list.component";
import {ShopProductViewComponent} from "../share/components/shop/shop-product-view/shop-product-view.component";
import {RetailerDefaultComponent} from "./components/retailer-default/retailer-default.component";
import {RetailerPlaygroundComponent} from "./components/retailer-playground/retailer-playground.component";

const routes: Routes = [{
  path: '', component: RetailerComponent, children: [
    {
      path: 'playground', component: RetailerPlaygroundComponent, children: [
        {path: '', redirectTo: '/retailer/playground/home', pathMatch: 'full'},
        {path: 'home', component: RetailerDefaultComponent},
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
export class RetailerRoutingModule {
}
