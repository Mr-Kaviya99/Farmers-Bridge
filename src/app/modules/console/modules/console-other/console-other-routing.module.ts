import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsoleOtherComponent} from './console-other.component';
import {ConsoleOtherContextComponent} from "./components/console-other-context/console-other-context.component";
import {
  ConsoleOtherBlogContextComponent
} from "./components/Blog/console-other-blog-context/console-other-blog-context.component";
import {ConsoleOtherNewBlogComponent} from "./components/Blog/console-other-new-blog/console-other-new-blog.component";
import {ConsoleOtherAllBlogComponent} from "./components/Blog/console-other-all-blog/console-other-all-blog.component";

const routes: Routes = [{
  path: '', component: ConsoleOtherComponent, children: [
    {
      path: 'manage', component: ConsoleOtherContextComponent, children: [
        {path: '', redirectTo: 'blog', pathMatch: 'full'},
        {
          path: 'blog', component: ConsoleOtherBlogContextComponent, children: [
            {path: '', redirectTo: 'new', pathMatch: 'full'},
            {path: 'new', component: ConsoleOtherNewBlogComponent},
            {path: 'all', component: ConsoleOtherAllBlogComponent},
          ]
        }
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleOtherRoutingModule {
}
