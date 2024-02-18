import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FarmerListingComponent} from './farmer-listing.component';
import {
  FarmerSalesContextComponent
} from "../farmer-sales/components/farmer-sales-context/farmer-sales-context.component";
import {MyListingsContextComponent} from "./components/my-listings/my-listings-context/my-listings-context.component";
import {NewListingComponent} from "../../../share/components/listing/new-listing/new-listing.component";
import {MyAllListingComponent} from "../../../share/components/listing/my-all-listing/my-all-listing.component";
import {MyWinListingComponent} from "../../../share/components/listing/my-win-listing/my-win-listing.component";
import {
  FarmerOpenOrderContextComponent
} from "./components/orders/farmer-open-order-context/farmer-open-order-context.component";
import {FarmerListingContextComponent} from "./components/farmer-listing-context/farmer-listing-context.component";
import {OpenOrderListComponent} from "../../../share/components/open-orders/open-order-list/open-order-list.component";
import {
  OpenOrderDetailComponent
} from "../../../share/components/open-orders/open-order-detail/open-order-detail.component";

const routes: Routes = [
  {
    path: '', component: FarmerListingComponent, children: [
      {
        path: 'manage', component: FarmerListingContextComponent, children: [
          {path: '', redirectTo: 'my-listing', pathMatch: 'full'},
          {
            path: 'my-listing', component: MyListingsContextComponent, children: [
              {path: '', redirectTo: 'new', pathMatch: 'full'},
              {path: 'new', component: NewListingComponent},
              {path: 'all', component: MyAllListingComponent},
              {path: 'received', component: MyWinListingComponent},
            ]
          },
          {
            path: 'open-listings', component: FarmerOpenOrderContextComponent, children: [
              {path: '', redirectTo: 'list', pathMatch: 'full'},
              {path: 'list', component: OpenOrderListComponent},
              {path: 'details', component: OpenOrderDetailComponent},
              // {path: 'all', component: MyAllListingComponent},
              // {path: 'received', component: MyWinListingComponent},
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
export class FarmerListingRoutingModule {
}
