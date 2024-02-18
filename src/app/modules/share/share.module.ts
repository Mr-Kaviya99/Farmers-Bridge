import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewProductComponent } from './components/product/new-product/new-product.component';
import { AllProductComponent } from './components/product/all-product/all-product.component';
import { ProductContextComponent } from './components/product/product-context/product-context.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import { NewListingComponent } from './components/listing/new-listing/new-listing.component';
import { MyAllListingComponent } from './components/listing/my-all-listing/my-all-listing.component';
import { MyWinListingComponent } from './components/listing/my-win-listing/my-win-listing.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { OpenOrderListComponent } from './components/open-orders/open-order-list/open-order-list.component';
import { OpenOrderDetailComponent } from './components/open-orders/open-order-detail/open-order-detail.component';


@NgModule({
  declarations: [
    ShareComponent,
    BlogComponent,
    NewProductComponent,
    AllProductComponent,
    ProductContextComponent,
    NewListingComponent,
    MyAllListingComponent,
    MyWinListingComponent,
    OpenOrderListComponent,
    OpenOrderDetailComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
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
export class ShareModule { }
