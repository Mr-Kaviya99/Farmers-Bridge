import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-wholesale-buyer-header',
  templateUrl: './wholesale-buyer-header.component.html',
  styleUrls: ['./wholesale-buyer-header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class WholesaleBuyerHeaderComponent {
  sliderState: boolean = true;

  logout() {

  }
}
