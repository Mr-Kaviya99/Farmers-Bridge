import {Component, Inject} from '@angular/core';
import {BidDetailsComponent} from "../../listing/bid-details/bid-details.component";
import {ListingService} from "../../../services/listing/listing.service";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent {

  productDetails: any;
  orderQty: number = 0;
  subTotal: number = 0;
  deliveryFee: number = 0;
  netTotal: number = 0;

  constructor(
    private listingService: ListingService,
    private cookieManager: CookieManagerService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<BidDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    this.productDetails = this.data;
    console.log(this.productDetails)
  }

  countUp() {
    if (this.orderQty < this.productDetails?.qty) {
      this.orderQty += 1;
      this.subTotal = this.orderQty * this.productDetails?.price;
      this.netTotal = 0;
      this.netTotal = this.subTotal + this.netTotal;
    }
  }

  countDown() {
    if (this.orderQty > 0) {
      this.orderQty -= 1;
      this.subTotal = this.orderQty * this.productDetails?.price;
      this.netTotal = 0;
      this.netTotal = this.subTotal + this.netTotal;
    }
  }
}
