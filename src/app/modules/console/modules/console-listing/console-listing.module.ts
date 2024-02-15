import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleListingRoutingModule } from './console-listing-routing.module';
import { ConsoleListingComponent } from './console-listing.component';


@NgModule({
  declarations: [
    ConsoleListingComponent
  ],
  imports: [
    CommonModule,
    ConsoleListingRoutingModule
  ]
})
export class ConsoleListingModule { }
