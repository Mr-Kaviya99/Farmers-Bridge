import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BidDetailService} from "../../../services/bid-details/bid-detail.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.scss']
})
export class BidDetailsComponent implements OnInit {

  listingId: any
  allBidDetails: any;


  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  constructor(
    public dialogRef: MatDialogRef<BidDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bidDetailService: BidDetailService,
  ) {
  }

  ngOnInit(): void {
    this.listingId = this.data;
    this.loadAllBidDetails();
  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    this.loadAllBidDetails();
  }

  loadAllBidDetails() {
    this.bidDetailService.getAllBidDetailsByListingId(this.page, this.pageSize, this.listingId)
      .subscribe((response: any) => {
          console.log(response)
          this.dataCount = response.data.count;
          this.allBidDetails = response.data.dataList;
        }
      )
  }
}
