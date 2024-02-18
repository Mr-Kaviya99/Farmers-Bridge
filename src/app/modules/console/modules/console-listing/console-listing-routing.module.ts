import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsoleListingComponent} from './console-listing.component';
import {ConsoleListingContextComponent} from "./components/console-listing-context/console-listing-context.component";
import {
  ConsoleListingBidListingContextComponent
} from "./components/listing/console-listing-bid-listing-context/console-listing-bid-listing-context.component";
import {ConsoleListingAllComponent} from "./components/listing/console-listing-all/console-listing-all.component";

const routes: Routes = [
  {path: '', component: ConsoleListingComponent, children: [
      {
        path: 'manage', component: ConsoleListingContextComponent, children: [
          {path: '', redirectTo: 'bid', pathMatch: 'full'},
          {
            path: 'bid', component: ConsoleListingBidListingContextComponent, children: [
              {path: '', redirectTo: 'all', pathMatch: 'full'},
              // {path: 'new', component: NewShirtComponent},
              {path: 'all', component: ConsoleListingAllComponent},
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleListingRoutingModule {
}
