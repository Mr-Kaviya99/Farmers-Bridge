import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs";
import {DeleteInfo} from "../../../../../../share/services/dto/delete-info/delete-info";
import {EffectInfo} from "../../../../../../share/services/dto/delete-info/effect-info";
import {DeleteInfoComponent} from "../../../../../../share/widgets/pop-up/delete-info/delete-info.component";
import {SnackBarService} from "../../../../../../share/services/snack-bar/snack-bar.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ListingService} from "../../../../../../share/services/listing/listing.service";

@Component({
  selector: 'app-console-listing-all',
  templateUrl: './console-listing-all.component.html',
  styleUrls: ['./console-listing-all.component.scss']
})
export class ConsoleListingAllComponent implements OnInit {

  allListings: any;
  selectedPropertyId: any;
  resourceLanguages: any;

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
    this.listingService.getAllListings(this.page, this.pageSize, this.role)
      .subscribe((response: any) => {
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
