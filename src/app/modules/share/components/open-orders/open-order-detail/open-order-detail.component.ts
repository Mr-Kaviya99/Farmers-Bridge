import {Component} from '@angular/core';
import {ListingService} from "../../../services/listing/listing.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {BidDetailService} from "../../../services/bid-details/bid-detail.service";

@Component({
  selector: 'app-open-order-detail',
  templateUrl: './open-order-detail.component.html',
  styleUrls: ['./open-order-detail.component.scss']
})
export class OpenOrderDetailComponent {


  listingId: string = '';
  maxBid: any;
  listingDetails: any;
  userData: any;

  form = new FormGroup({
    bidAmount: new FormControl(null, [Validators.required]),
  });

  constructor(
    private listingService: ListingService,
    private snackBarService: SnackBarService,
    private bidDetailService: BidDetailService,
    private cookieManager: CookieManagerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.listingId = params['listingId'];
          this.maxBid = params['maxBid'];
        }
      );
    this.loadListingById();
    this.userData = JSON.parse(this.cookieManager.getPersonalData());
    console.log(this.userData)
  }

  loadListingById() {
    this.listingService.listingById(this.listingId).subscribe(response => {
      this.listingDetails = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  navBack() {
    switch (this.userData.role[0]) {
      case "WHOLESALER":
        this.router.navigateByUrl('/wholesale-buyer/playground/listing/manage/open-listings/list')
        break;

      case "FARMER":
        this.router.navigateByUrl('/farmer/playground/listing/manage/open-listings/list')
        break;

      default:
        break;
    }
  }

  makeABid(f: FormGroupDirective) {
    this.bidDetailService.saveBid(this.userData.property_id, this.listingId, this.form.get('bidAmount')?.value!).subscribe(response => {
      console.log(response);
      if (response.code === 201) {
        this.snackBarService.openSuccessSnackBar('Success!', 'Close');
        this.refreshForm(f);
      }
    });
  }

  private refreshForm(form: FormGroupDirective) {
    form.resetForm();
    form.reset();
  }
}
