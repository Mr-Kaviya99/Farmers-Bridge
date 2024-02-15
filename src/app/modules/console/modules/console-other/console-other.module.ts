import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleOtherRoutingModule } from './console-other-routing.module';
import { ConsoleOtherComponent } from './console-other.component';


@NgModule({
  declarations: [
    ConsoleOtherComponent
  ],
  imports: [
    CommonModule,
    ConsoleOtherRoutingModule
  ]
})
export class ConsoleOtherModule { }
