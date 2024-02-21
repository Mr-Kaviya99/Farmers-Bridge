import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-retailer-header',
  templateUrl: './retailer-header.component.html',
  styleUrls: ['./retailer-header.component.scss'],
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
export class RetailerHeaderComponent {
  sliderState: boolean = true;

  constructor(
    private cookieManagerService: CookieManagerService,
    private router: Router,
  ) {
  }

  logout() {
    this.cookieManagerService.logout();
    this.router.navigateByUrl('/security/login').then();
  }
}
