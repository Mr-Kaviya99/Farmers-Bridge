import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsoleGeneralComponent} from './console-general.component';
import {ConsoleGeneralContextComponent} from "./components/console-general-context/console-general-context.component";
import {
  ConsoleGeneralUserContextComponent
} from "./components/user/console-general-user-context/console-general-user-context.component";
import {
  ConsoleGeneralAllUserComponent
} from "./components/user/console-general-all-user/console-general-all-user.component";
import {NewProductComponent} from "../../../share/components/product/new-product/new-product.component";
import {AllProductComponent} from "../../../share/components/product/all-product/all-product.component";
import {
  ConsoleProductContextComponent
} from "./components/product/console-product-context/console-product-context.component";
import {ViewProductComponent} from "../../../share/components/product/view-product/view-product.component";

const routes: Routes = [{
  path: '', component: ConsoleGeneralComponent, children: [
    {
      path: 'manage', component: ConsoleGeneralContextComponent, children: [
        {path: '', redirectTo: 'user', pathMatch: 'full'},
        {
          path: 'user', component: ConsoleGeneralUserContextComponent, children: [
            {path: '', redirectTo: 'all', pathMatch: 'full'}, // {path: 'new', component: NewShirtComponent},
            {path: 'all', component: ConsoleGeneralAllUserComponent},]
        },
        {
          path: 'product', component: ConsoleProductContextComponent, children: [
            {path: '', redirectTo: 'new', pathMatch: 'full'},
            {path: 'new', component: NewProductComponent},
            {path: 'all', component: AllProductComponent},
            {path: 'view', component: ViewProductComponent},
          ]
        },
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class ConsoleGeneralRoutingModule {
}
