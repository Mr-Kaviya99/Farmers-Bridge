import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {ProductService} from "../../../services/product/product.service";
import {DeleteInfo} from "../../../services/dto/delete-info/delete-info";
import {EffectInfo} from "../../../services/dto/delete-info/effect-info";
import {DeleteInfoComponent} from "../../../widgets/pop-up/delete-info/delete-info.component";
import {EditSectionData} from "../../../services/dto/edit-section/EditSectionData";
import {EditSectionOptionData} from "../../../services/dto/edit-section/EditSectionOptionData";
import {NavigateOption} from "../../../services/dto/enums/NavigateOptions";
import {EditSectionComponent} from "../../../widgets/bottom-sheet/edit-section/edit-section.component";
import {EditProductComponent} from "../edit-product/edit-product.component";
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {

  productList: any;
  selectedPropertyId: any;

  productType: string = 'ALL';

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  searchForm = new FormGroup({
    productType: new FormControl('ALL')
  });

  constructor(
    private productService: ProductService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
    private _bottomSheet: MatBottomSheet,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {

    this.loadAllProduct();

    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {
        // @ts-ignore
        this.productType = data.productType;
        this.loadAllProduct();
      });
  }

  loadAllProduct() {
    this.productService.getAllProducts(this.page, this.pageSize, this.productType)
      .subscribe((response: any) => {
          this.dataCount = response.data.count;
          this.productList = response.data.dataList;
        }
      )
  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    this.loadAllProduct();
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
        this.productService.deleteProduct(this.selectedPropertyId).subscribe(response => {
          if (response?.code == 204) {
            this.snackBarService.openSuccessSnackBar('Deleted', 'Close');
            this.loadAllProduct();
          } else {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
          }
        });
      }
    });
  }

  callDecisionMaker(propertyId: any) {
    let dataSet = new EditSectionData(
      'Choose your option.',
      'If you want to update existing data you must choose an option',
      [
        new EditSectionOptionData(
          propertyId,
          'settings_applications',
          'Update Product',
          'If you want to update existing data you must choose an option',
          '',
          NavigateOption.POPUP,
          EditProductComponent,
          []
        )
      ],
      [],
    );

    const bottomSheetRef = this._bottomSheet.open(EditSectionComponent, {
      data: dataSet
    });

    bottomSheetRef.afterDismissed().subscribe(result => {
      this.loadAllProduct();
    });
  }

  navigateToViewUser(productId: any) {
    let userData = JSON.parse(this.cookieManager.getPersonalData());
    console.log(userData)
    switch (userData.role[0]) {
      case "ADMIN":
        this.router.navigate(['/console/playground/general/manage/product/view'], {queryParams: {productId: productId}})
        break;

      case "FARMER":
        this.router.navigate(['/farmer/playground/sales/manage/product/view'], {queryParams: {productId: productId}})
        break;

      default:
        break;
    }
  }
}
