import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WholesaleBuyerRoutingModule } from './wholesale-buyer-routing.module';
import { WholesaleBuyerComponent } from './wholesale-buyer.component';


@NgModule({
  declarations: [
    WholesaleBuyerComponent
  ],
  imports: [
    CommonModule,
    WholesaleBuyerRoutingModule
  ]
})
export class WholesaleBuyerModule { }
