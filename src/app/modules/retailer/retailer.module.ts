import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerComponent } from './retailer.component';
import { RetailerBodyComponent } from './components/retailer-body/retailer-body.component';
import { RetailerDefaultComponent } from './components/retailer-default/retailer-default.component';
import { RetailerHeaderComponent } from './components/retailer-header/retailer-header.component';
import { RetailerPlaygroundComponent } from './components/retailer-playground/retailer-playground.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    RetailerComponent,
    RetailerBodyComponent,
    RetailerDefaultComponent,
    RetailerHeaderComponent,
    RetailerPlaygroundComponent
  ],
  imports: [
    CommonModule,
    RetailerRoutingModule,
    MatIconModule
  ]
})
export class RetailerModule { }
