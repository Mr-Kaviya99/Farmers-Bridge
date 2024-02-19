import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WholesaleBuyerListingsComponent} from './wholesale-buyer-listings.component';
import {NewListingComponent} from "../../../share/components/listing/new-listing/new-listing.component";
import {MyAllListingComponent} from "../../../share/components/listing/my-all-listing/my-all-listing.component";
import {MyWinListingComponent} from "../../../share/components/listing/my-win-listing/my-win-listing.component";
import {
  FarmerOpenOrderContextComponent
} from "../../../farmer/modules/farmer-listing/components/orders/farmer-open-order-context/farmer-open-order-context.component";
import {OpenOrderListComponent} from "../../../share/components/open-orders/open-order-list/open-order-list.component";
import {
  OpenOrderDetailComponent
} from "../../../share/components/open-orders/open-order-detail/open-order-detail.component";
import {
  WholesaleBuyerListingContextComponent
} from "./components/wholesale-buyer-listing-context/wholesale-buyer-listing-context.component";
import {MyListingsContextComponent} from "./components/my-listings/my-listings-context/my-listings-context.component";
import {
  WholesaleBuyerOpenOrderContextComponent
} from "./components/orders/wholesale-buyer-open-order-context/wholesale-buyer-open-order-context.component";

const routes: Routes = [
  {
    path: '', component: WholesaleBuyerListingsComponent, children: [
      {
        path: 'manage', component: WholesaleBuyerListingContextComponent, children: [
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
            path: 'open-listings', component: WholesaleBuyerOpenOrderContextComponent, children: [
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
export class WholesaleBuyerListingsRoutingModule {
}
