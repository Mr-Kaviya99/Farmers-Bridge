import {Component, ViewEncapsulation} from '@angular/core';
import {BlogService} from "../../../services/blog/blog.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogViewComponent {
  blogContent: any;
  blogId: string = '';
  blogDetails: any;
  userData: any;

  constructor(
    private blogService: BlogService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.blogId = params['blogId'];
        }
      );
    this.loadBlogById();
    this.userData = JSON.parse(this.cookieManager.getPersonalData());
    console.log(this.userData)
  }

  loadBlogById() {
    this.blogService.blogById(this.blogId).subscribe(response => {
      console.log(response)
      this.blogDetails = response.data;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  navBack() {
    switch (this.userData.role[0]) {
      case "WHOLESALER":
        this.router.navigateByUrl('/wholesale-buyer/playground/blog/manage/open-blogs/list')
        break;

      case "FARMER":
        this.router.navigateByUrl('/farmer/playground/blog/manage/open-blogs/list')
        break;

      default:
        break;
    }
  }
}
