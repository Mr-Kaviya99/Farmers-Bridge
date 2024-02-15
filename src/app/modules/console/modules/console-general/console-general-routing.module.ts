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
import {
  ConsoleGeneralProductContextComponent
} from "./components/product/console-general-product-context/console-general-product-context.component";
import {
  ConsoleGeneralNewProductComponent
} from "./components/product/console-general-new-product/console-general-new-product.component";
import {
  ConsoleGeneralAllProductsComponent
} from "./components/product/console-general-all-products/console-general-all-products.component";

const routes: Routes = [
  {
    path: '', component: ConsoleGeneralComponent, children: [
      {
        path: 'manage', component: ConsoleGeneralContextComponent, children: [
          {path: '', redirectTo: 'user', pathMatch: 'full'},
          {
            path: 'user', component: ConsoleGeneralUserContextComponent, children: [
              {path: '', redirectTo: 'all', pathMatch: 'full'},
              // {path: 'new', component: NewShirtComponent},
              {path: 'all', component: ConsoleGeneralAllUserComponent},
            ]
          },
          {
            path: 'product', component: ConsoleGeneralProductContextComponent, children: [
              {path: '', redirectTo: 'new', pathMatch: 'full'},
              {path: 'new', component: ConsoleGeneralNewProductComponent},
              {path: 'all', component: ConsoleGeneralAllProductsComponent},
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
export class ConsoleGeneralRoutingModule {
}
