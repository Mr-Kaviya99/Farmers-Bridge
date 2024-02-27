import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConsoleOtherRoutingModule} from './console-other-routing.module';
import {ConsoleOtherComponent} from './console-other.component';
import {ConsoleOtherContextComponent} from './components/console-other-context/console-other-context.component';
import {ConsoleOtherNewBlogComponent} from './components/Blog/console-other-new-blog/console-other-new-blog.component';
import {ConsoleOtherAllBlogComponent} from './components/Blog/console-other-all-blog/console-other-all-blog.component';
import {
  ConsoleOtherBlogContextComponent
} from './components/Blog/console-other-blog-context/console-other-blog-context.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {QuillModule} from "ngx-quill";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ConsoleOtherComponent,
    ConsoleOtherContextComponent,
    ConsoleOtherNewBlogComponent,
    ConsoleOtherAllBlogComponent,
    ConsoleOtherBlogContextComponent
  ],
  imports: [
    CommonModule,
    ConsoleOtherRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    QuillModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatDialogModule
  ]
})
export class ConsoleOtherModule {
}
