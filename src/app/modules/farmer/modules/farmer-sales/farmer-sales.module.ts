import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FarmerSalesRoutingModule} from './farmer-sales-routing.module';
import {FarmerSalesComponent} from './farmer-sales.component';
import {FarmerSalesContextComponent} from './components/farmer-sales-context/farmer-sales-context.component';
import {
  FarmerProductContextComponent
} from './components/product/farmer-product-context/farmer-product-context.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    FarmerSalesComponent,
    FarmerSalesContextComponent,
    FarmerProductContextComponent
  ],
  imports: [
    CommonModule,
    FarmerSalesRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatDialogModule
  ]
})
export class FarmerSalesModule {
}
