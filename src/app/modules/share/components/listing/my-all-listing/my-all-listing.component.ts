import {Component} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup} from "@angular/forms";
import {ListingService} from "../../../services/listing/listing.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {debounceTime} from "rxjs";
import {DeleteInfo} from "../../../services/dto/delete-info/delete-info";
import {EffectInfo} from "../../../services/dto/delete-info/effect-info";
import {DeleteInfoComponent} from "../../../widgets/pop-up/delete-info/delete-info.component";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";

@Component({
  selector: 'app-my-all-listing',
  templateUrl: './my-all-listing.component.html',
  styleUrls: ['./my-all-listing.component.scss']
})
export class MyAllListingComponent {

  allListings: any;
  selectedPropertyId: any;

  role: string = 'ALL';

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  searchForm = new FormGroup({
    role: new FormControl('')
  });

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

    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {
        // @ts-ignore
        this.role = data.role;
        this.loadAllListings();
      });
  }

  loadAllListings() {
    const userData = JSON.parse(this.cookieManager.getPersonalData());
    this.listingService.getAllListingsByUserId(this.page, this.pageSize, userData?.property_id)
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

  deletePopUp(propertyId: any) {
    this.selectedPropertyId = propertyId;
    let deleteData = new DeleteInfo(
      propertyId,
      `<h4>Are you sure you want to delete <b>"` + propertyId + `"?</b> You can’t undo this action.</h4>`,
      new EffectInfo(
        'Warning',
        `Please ensure that you have reviewed and considered the impact of this action`,
      ),
      []
    );

    const dialogRef = this.dialog.open(DeleteInfoComponent, {
      data: deleteData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listingService.deleteListing(this.selectedPropertyId).subscribe(response => {
          if (response?.code == 204) {
            this.snackBarService.openSuccessSnackBar('Deleted', 'Close');
            this.loadAllListings();
          } else {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
          }
        });
      }
    });
  }
}
