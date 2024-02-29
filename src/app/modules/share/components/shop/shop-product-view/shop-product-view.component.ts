import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product/product.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {BidDetailService} from "../../../services/bid-details/bid-detail.service";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BidDetailsComponent} from "../../listing/bid-details/bid-details.component";
import {MatDialog} from "@angular/material/dialog";
import {CheckoutPaymentComponent} from "../../payment/checkout-payment/checkout-payment.component";

@Component({
  selector: 'app-shop-product-view',
  templateUrl: './shop-product-view.component.html',
  styleUrls: ['./shop-product-view.component.scss']
})
export class ShopProductViewComponent {

  productId: string = '';
  maxBid: any;
  productDetails: any;
  userData: any;

  form = new FormGroup({
    bidAmount: new FormControl(null, [Validators.required]),
  });

  constructor(
    private productService: ProductService,
    private snackBarService: SnackBarService,
    private bidDetailService: BidDetailService,
    private cookieManager: CookieManagerService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.productId = params['productId'];
        }
      );
    this.loadProductById();
    this.userData = JSON.parse(this.cookieManager.getPersonalData());
    console.log(this.userData)
  }

  loadProductById() {
    this.productService.productById(this.productId).subscribe(response => {
      console.log(response)
      this.productDetails = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  checkout(productDetails: any) {
    const dialogRef = this.dialog.open(CheckoutPaymentComponent, {
      data: productDetails,
    });
  }
}
