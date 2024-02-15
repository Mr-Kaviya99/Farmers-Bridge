import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleListingComponent } from './console-listing.component';

const routes: Routes = [{ path: '', component: ConsoleListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleListingRoutingModule { }
