import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsoleComponent} from './console.component';
import {ConsolePlaygroundComponent} from "./components/console-playground/console-playground.component";
import {ConsoleDefaultComponent} from "./components/console-default/console-default.component";

const routes: Routes = [
  {
    path: '', component: ConsoleComponent, children: [
      {
        path: 'playground', component: ConsolePlaygroundComponent, children: [
          {path: '', redirectTo: '/console/playground/home', pathMatch: 'full'},
          {path: 'home', component: ConsoleDefaultComponent},
          {
            path: 'general',
            loadChildren: () => import('./modules/console-general/console-general.module').then(m => m.ConsoleGeneralModule)
          },
          {
            path: 'listing',
            loadChildren: () => import('./modules/console-listing/console-listing.module').then(m => m.ConsoleListingModule)
          },
          {
            path: 'other',
            loadChildren: () => import('./modules/console-other/console-other.module').then(m => m.ConsoleOtherModule)
          }

        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule {
}
