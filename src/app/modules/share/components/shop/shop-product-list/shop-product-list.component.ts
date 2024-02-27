import {Component} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrls: ['./shop-product-list.component.scss']
})
export class ShopProductListComponent {
  allProducts: any;

  role: string = 'ALL';

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  constructor(
    private productService: ProductService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts(this.page, this.pageSize, 'ALL')
      .subscribe((response: any) => {
          console.log(response)
          this.dataCount = response.data.count;
          this.allProducts = response.data.dataList;
        }
      )
  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    this.loadAllProducts();
  }

  navigate(productId: any) {
    let userData = JSON.parse(this.cookieManager.getPersonalData());
    console.log(userData)
    switch (userData.role[0]) {
      case "WHOLESALER":
        this.router.navigate(['/wholesale-buyer/playground/shop/product-view'], {queryParams: {productId: productId}})
        break;

      case "RETAILER":
        this.router.navigate(['/retailer/playground/shop/product-view'], {queryParams: {productId: productId}})
        break;

      default:
        break;
    }
  }
}
