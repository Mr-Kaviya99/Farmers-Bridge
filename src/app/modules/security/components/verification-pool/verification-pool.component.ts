import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../share/services/auth/auth.service";
import {Router} from "@angular/router";
import {LoadingService} from "../../../share/services/loading/loading.service";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-verification-pool',
  templateUrl: './verification-pool.component.html',
  styleUrls: ['./verification-pool.component.scss']
})
export class VerificationPoolComponent implements OnInit {

  userData: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private cookieManager: CookieManagerService,
    private snackBarService: SnackBarService
  ) {
  }

  ngOnInit(): void {
    this.checkUser()
  }

  checkUser() {
    if (this.cookieManager.tokenIsExists('token')) {
      console.log(JSON.parse(this.cookieManager.getPersonalData()));
      this.userData = JSON.parse(this.cookieManager.getPersonalData());
      switch (this.userData.role[0]) {
        case "ADMIN":
          this.snackBarService.openSuccessSnackBar('Welcome Admin ' + this.userData.firstName + ' ' + this.userData.lastName, 'close')
          this.router.navigateByUrl('/console/playground').then();
          break;

        case "FARMER":
          this.snackBarService.openSuccessSnackBar('Welcome Farmer ' + this.userData.firstName + ' ' + this.userData.lastName, 'close')
          this.router.navigateByUrl('/farmer/playground').then();
          break;

        case "WHOLESALER":
          this.snackBarService.openSuccessSnackBar('Welcome Whole Seller ' + this.userData.firstName + ' ' + this.userData.lastName, 'close')
          this.router.navigateByUrl('/wholesale-buyer/playground').then();
          break;

        case "RETAILER":
          this.snackBarService.openSuccessSnackBar('Welcome Retailer ' + this.userData.firstName + ' ' + this.userData.lastName, 'close')
          this.router.navigateByUrl('/retailer/playground').then();
          break;

        default:
          this.router.navigateByUrl('/security/login').then();
          break;
      }
    } else {
      this.router.navigateByUrl('/security/login').then();
    }
  }
}
