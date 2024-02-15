import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { ConsolePlaygroundComponent } from './components/console-playground/console-playground.component';
import { ConsoleDefaultComponent } from './components/console-default/console-default.component';
import { ConsoleHeaderComponent } from './components/console-header/console-header.component';
import { ConsoleBodyComponent } from './components/console-body/console-body.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [
    ConsoleComponent,
    ConsolePlaygroundComponent,
    ConsoleDefaultComponent,
    ConsoleHeaderComponent,
    ConsoleBodyComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule
  ]
})
export class ConsoleModule { }
