import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FarmerSalesComponent} from './farmer-sales.component';
import {NewProductComponent} from "../../../share/components/product/new-product/new-product.component";
import {AllProductComponent} from "../../../share/components/product/all-product/all-product.component";
import {FarmerSalesContextComponent} from "./components/farmer-sales-context/farmer-sales-context.component";
import {
  FarmerProductContextComponent
} from "./components/product/farmer-product-context/farmer-product-context.component";
import {ViewProductComponent} from "../../../share/components/product/view-product/view-product.component";

const routes: Routes = [{
  path: '', component: FarmerSalesComponent, children: [
    {
      path: 'manage', component: FarmerSalesContextComponent, children: [
        {path: '', redirectTo: 'product', pathMatch: 'full'},
        {
          path: 'product', component: FarmerProductContextComponent, children: [
            {path: '', redirectTo: 'new', pathMatch: 'full'},
            {path: 'new', component: NewProductComponent},
            {path: 'all', component: AllProductComponent},
            {path: 'view', component: ViewProductComponent},
          ]
        },
      ]
    }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerSalesRoutingModule {
}
