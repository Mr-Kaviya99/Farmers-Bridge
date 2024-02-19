import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { FarmerBodyComponent } from './components/farmer-body/farmer-body.component';
import { FarmerDefaultComponent } from './components/farmer-default/farmer-default.component';
import { FarmerHeaderComponent } from './components/farmer-header/farmer-header.component';
import { FarmerPlaygroundComponent } from './components/farmer-playground/farmer-playground.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    FarmerComponent,
    FarmerBodyComponent,
    FarmerDefaultComponent,
    FarmerHeaderComponent,
    FarmerPlaygroundComponent,
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    MatIconModule
  ]
})
export class FarmerModule { }
