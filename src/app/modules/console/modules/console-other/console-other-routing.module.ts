import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleOtherComponent } from './console-other.component';

const routes: Routes = [{ path: '', component: ConsoleOtherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleOtherRoutingModule { }
