import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerSalesComponent } from './farmer-sales.component';
import {ProductContextComponent} from "../../../share/components/product/product-context/product-context.component";
import {NewProductComponent} from "../../../share/components/product/new-product/new-product.component";
import {AllProductComponent} from "../../../share/components/product/all-product/all-product.component";
import {FarmerSalesContextComponent} from "./components/farmer-sales-context/farmer-sales-context.component";
import {
  FarmerProductContextComponent
} from "./components/product/farmer-product-context/farmer-product-context.component";

const routes: Routes = [{ path: '', component: FarmerSalesComponent , children: [
    {
      path: 'manage', component: FarmerSalesContextComponent, children: [
        {path: '', redirectTo: 'product', pathMatch: 'full'},
        {
          path: 'product', component: FarmerProductContextComponent, children: [
            {path: '', redirectTo: 'new', pathMatch: 'full'},
            {path: 'new', component: NewProductComponent},
            {path: 'all', component: AllProductComponent},
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
export class FarmerSalesRoutingModule { }
