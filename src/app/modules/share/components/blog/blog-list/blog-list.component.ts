import {Component} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {BlogService} from "../../../services/blog/blog.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  allBlogs: any;

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  constructor(
    private blogService: BlogService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadAllBlogs();
  }

  loadAllBlogs() {
    this.blogService.getAllBlogs(this.page, this.pageSize)
      .subscribe((response: any) => {
          console.log(response)
          this.dataCount = response.data.count;
          this.allBlogs = response.data.dataList;
        }
      )
  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    this.loadAllBlogs();
  }

  navigate(blogId: any) {
    let userData = JSON.parse(this.cookieManager.getPersonalData());
    console.log(userData)
    switch (userData.role[0]) {
      case "WHOLESALER":
        this.router.navigate(['/wholesale-buyer/playground/blog/view'], {queryParams: {blogId: blogId}})
        break;

      case "FARMER":
        this.router.navigate(['/farmer/playground/blog/view'], {queryParams: {blogId: blogId}})
        break;

      case "RETAILER":
        this.router.navigate(['/retailer/playground/blog/view'], {queryParams: {blogId: blogId}})
        break;

      default:
        break;
    }
  }
}
