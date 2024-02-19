import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WholesaleBuyerRoutingModule } from './wholesale-buyer-routing.module';
import { WholesaleBuyerComponent } from './wholesale-buyer.component';
import { WholesaleBuyerPlaygroundComponent } from './components/wholesale-buyer-playground/wholesale-buyer-playground.component';
import { WholesaleBuyerHeaderComponent } from './components/wholesale-buyer-header/wholesale-buyer-header.component';
import { WholesaleBuyerDefaultComponent } from './components/wholesale-buyer-default/wholesale-buyer-default.component';
import { WholesaleBuyerBodyComponent } from './components/wholesale-buyer-body/wholesale-buyer-body.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    WholesaleBuyerComponent,
    WholesaleBuyerPlaygroundComponent,
    WholesaleBuyerHeaderComponent,
    WholesaleBuyerDefaultComponent,
    WholesaleBuyerBodyComponent
  ],
  imports: [
    CommonModule,
    WholesaleBuyerRoutingModule,
    MatIconModule
  ]
})
export class WholesaleBuyerModule { }
