import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WholesaleBuyerListingsRoutingModule } from './wholesale-buyer-listings-routing.module';
import { WholesaleBuyerListingsComponent } from './wholesale-buyer-listings.component';
import {MyListingsContextComponent} from "./components/my-listings/my-listings-context/my-listings-context.component";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { WholesaleBuyerListingContextComponent } from './components/wholesale-buyer-listing-context/wholesale-buyer-listing-context.component';
import { WholesaleBuyerOpenOrderContextComponent } from './components/orders/wholesale-buyer-open-order-context/wholesale-buyer-open-order-context.component';


@NgModule({
  declarations: [
    WholesaleBuyerListingsComponent,
    MyListingsContextComponent,
    WholesaleBuyerListingContextComponent,
    WholesaleBuyerOpenOrderContextComponent
  ],
  imports: [
    CommonModule,
    WholesaleBuyerListingsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class WholesaleBuyerListingsModule { }
