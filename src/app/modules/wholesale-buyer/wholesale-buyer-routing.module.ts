import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholesaleBuyerComponent } from './wholesale-buyer.component';

const routes: Routes = [{ path: '', component: WholesaleBuyerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleBuyerRoutingModule { }
