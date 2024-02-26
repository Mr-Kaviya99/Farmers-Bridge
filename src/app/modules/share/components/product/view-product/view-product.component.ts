import {Component} from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {

  productId: string = '';
  productDetails: any;
  userData: any;

  constructor(
    private productService: ProductService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.productId = params['productId'];
        }
      );
    this.loadProductById();
  }

  loadProductById() {
    this.productService.productById(this.productId).subscribe(response => {
      this.productDetails = response.data
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  navBack() {
    this.userData = JSON.parse(this.cookieManager.getPersonalData());
    console.log(this.userData)
    switch (this.userData.role[0]) {
      case "ADMIN":
        this.router.navigateByUrl('/console/playground/general/manage/product/all')
        break;

      case "FARMER":
        this.router.navigateByUrl('/farmer/playground/sales/manage/product/all')
        break;

      default:
        break;
    }

  }
}
