import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleGeneralRoutingModule } from './console-general-routing.module';
import { ConsoleGeneralComponent } from './console-general.component';
import { ConsoleGeneralContextComponent } from './components/console-general-context/console-general-context.component';
import { ConsoleGeneralUserContextComponent } from './components/user/console-general-user-context/console-general-user-context.component';
import { ConsoleGeneralAllUserComponent } from './components/user/console-general-all-user/console-general-all-user.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { ConsoleProductContextComponent } from './components/product/console-product-context/console-product-context.component';
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";


@NgModule({
  declarations: [
    ConsoleGeneralComponent,
    ConsoleGeneralContextComponent,
    ConsoleGeneralUserContextComponent,
    ConsoleGeneralAllUserComponent,
    ConsoleProductContextComponent
  ],
  imports: [
    CommonModule,
    ConsoleGeneralRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatBottomSheetModule
  ]
})
export class ConsoleGeneralModule { }
