import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ListingService} from "../../../services/listing/listing.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";

@Component({
  selector: 'app-open-order-list',
  templateUrl: './open-order-list.component.html',
  styleUrls: ['./open-order-list.component.scss']
})
export class OpenOrderListComponent implements OnInit {
  allListings: any;

  role: string = 'ALL';

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  constructor(
    private listingService: ListingService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadAllListings();
  }

  loadAllListings() {
    let userData = JSON.parse(this.cookieManager.getPersonalData());
    this.role = userData.role[0];
    let userRole = '';
    if (this.role === 'FARMER') {
      userRole = 'WHOLESALER'
    } else {
      userRole = 'FARMER'
    }
    this.listingService.getAllListings(this.page, this.pageSize, userRole)
      .subscribe((response: any) => {
          console.log(response)
          this.dataCount = response.data.count;
          this.allListings = response.data.dataList;
        }
      )
  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    this.loadAllListings();
  }

  navigate(listingId: any, maxBid: any) {
    let userData = JSON.parse(this.cookieManager.getPersonalData());
    console.log(userData)
    switch (userData.role[0]) {
      case "WHOLESALER":
        this.router.navigate(['/wholesale-buyer/playground/listing/manage/open-listings/details'], {
          queryParams: {
            listingId: listingId,
            maxBid: maxBid
          }
        })
        break;

      case "FARMER":
        this.router.navigate(['/farmer/playground/listing/manage/open-listings/details'], {
          queryParams: {
            listingId: listingId,
            maxBid: maxBid
          }
        })
        break;

      default:
        break;
    }
  }
}
