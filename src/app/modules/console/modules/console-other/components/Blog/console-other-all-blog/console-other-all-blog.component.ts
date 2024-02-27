import {Component} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {SnackBarService} from "../../../../../../share/services/snack-bar/snack-bar.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteInfo} from "../../../../../../share/services/dto/delete-info/delete-info";
import {EffectInfo} from "../../../../../../share/services/dto/delete-info/effect-info";
import {DeleteInfoComponent} from "../../../../../../share/widgets/pop-up/delete-info/delete-info.component";
import {BlogService} from "../../../../../../share/services/blog/blog.service";

@Component({
  selector: 'app-console-other-all-blog',
  templateUrl: './console-other-all-blog.component.html',
  styleUrls: ['./console-other-all-blog.component.scss']
})
export class ConsoleOtherAllBlogComponent {

  allBlogs: any;
  selectedPropertyId: any;

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;

  type: string = 'All';

  constructor(
    private blogService: BlogService,
    private snackBarService: SnackBarService,
    private _bottomSheet: MatBottomSheet,
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
          console.log(response);
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
        this.blogService.deleteBlog(this.selectedPropertyId).subscribe(response => {
          if (response?.code == 204) {
            this.snackBarService.openSuccessSnackBar('Deleted', 'Close');
            this.loadAllBlogs();
          } else {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
          }
        });
      }
    });
  }
}

