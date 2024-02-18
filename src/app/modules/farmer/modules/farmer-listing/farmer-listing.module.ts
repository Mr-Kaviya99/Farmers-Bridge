import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerListingRoutingModule } from './farmer-listing-routing.module';
import { FarmerListingComponent } from './farmer-listing.component';
import { FarmerListingContextComponent } from './components/farmer-listing-context/farmer-listing-context.component';
import { MyListingsContextComponent } from './components/my-listings/my-listings-context/my-listings-context.component';
import {MatButtonModule} from "@angular/material/button";
import { FarmerOpenOrderContextComponent } from './components/orders/farmer-open-order-context/farmer-open-order-context.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    FarmerListingComponent,
    FarmerListingContextComponent,
    MyListingsContextComponent,
    FarmerOpenOrderContextComponent
  ],
  imports: [
    CommonModule,
    FarmerListingRoutingModule,
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
export class FarmerListingModule { }
