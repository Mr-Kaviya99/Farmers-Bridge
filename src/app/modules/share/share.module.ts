import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareRoutingModule} from './share-routing.module';
import {ShareComponent} from './share.component';
import {NewProductComponent} from './components/product/new-product/new-product.component';
import {AllProductComponent} from './components/product/all-product/all-product.component';
import {ProductContextComponent} from './components/product/product-context/product-context.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NewListingComponent} from './components/listing/new-listing/new-listing.component';
import {MyAllListingComponent} from './components/listing/my-all-listing/my-all-listing.component';
import {MyWinListingComponent} from './components/listing/my-win-listing/my-win-listing.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {OpenOrderListComponent} from './components/open-orders/open-order-list/open-order-list.component';
import {OpenOrderDetailComponent} from './components/open-orders/open-order-detail/open-order-detail.component';
import {BlogContextComponent} from './components/blog/blog-context/blog-context.component';
import {BlogListComponent} from './components/blog/blog-list/blog-list.component';
import {BlogViewComponent} from './components/blog/blog-view/blog-view.component';
import {ShopContextComponent} from './components/shop/shop-context/shop-context.component';
import {ShopProductListComponent} from './components/shop/shop-product-list/shop-product-list.component';
import {ShopProductViewComponent} from './components/shop/shop-product-view/shop-product-view.component';
import {MainLoadingComponent} from "./components/main-loading/main-loading.component";
import {EditSectionComponent} from "./widgets/bottom-sheet/edit-section/edit-section.component";
import {ChangeStatusComponent} from "./widgets/pop-up/change-status/change-status.component";
import {DeleteInfoComponent} from "./widgets/pop-up/delete-info/delete-info.component";
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ShareComponent,
    NewProductComponent,
    AllProductComponent,
    ProductContextComponent,
    NewListingComponent,
    MyAllListingComponent,
    MyWinListingComponent,
    OpenOrderListComponent,
    OpenOrderDetailComponent,
    BlogContextComponent,
    BlogListComponent,
    BlogViewComponent,
    ShopContextComponent,
    ShopProductListComponent,
    ShopProductViewComponent,
    MainLoadingComponent,
    EditSectionComponent,
    ChangeStatusComponent,
    DeleteInfoComponent,
    EditProductComponent,
    ViewProductComponent
  ],
  exports: [
    MainLoadingComponent
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
    MatNativeDateModule,
    MatDialogModule
  ]
})
export class ShareModule {
}
