import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleListingRoutingModule } from './console-listing-routing.module';
import { ConsoleListingComponent } from './console-listing.component';
import { ConsoleListingContextComponent } from './components/console-listing-context/console-listing-context.component';
import { ConsoleListingAllComponent } from './components/listing/console-listing-all/console-listing-all.component';
import { ConsoleListingBidListingContextComponent } from './components/listing/console-listing-bid-listing-context/console-listing-bid-listing-context.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    ConsoleListingComponent,
    ConsoleListingContextComponent,
    ConsoleListingAllComponent,
    ConsoleListingBidListingContextComponent
  ],
    imports: [
        CommonModule,
        ConsoleListingRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule
    ]
})
export class ConsoleListingModule { }
