import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs";
import {AuthService} from "../../../../../../share/services/auth/auth.service";
import {SnackBarService} from "../../../../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-console-general-all-user',
  templateUrl: './console-general-all-user.component.html',
  styleUrls: ['./console-general-all-user.component.scss']
})
export class ConsoleGeneralAllUserComponent implements OnInit {

  allTechnologies: any;
  selectedPropertyId: any;
  resourceLanguages: any;
  allUsers: any;

  searchText: string = '';
  role: string = 'ALL';

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  searchForm = new FormGroup({
    role: new FormControl('ALL')
  });

  constructor(
    private authService: AuthService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
    this.loadAllUsers();
    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {
        // @ts-ignore
        this.role = data.role;
        this.loadAllUsers();
      });
  }

  deletePopUp(technologiesId: any) {

  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.authService.getAllUsers(this.page, this.pageSize, this.role).subscribe(response => {
      console.log(response)
      this.allUsers = response.data.dataList;
      this.dataCount = response.data.count;
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  restrictUser(userId: any) {
    this.authService.restrictUser(userId).subscribe(response => {
      console.log(response)
      if (response.code === 201){
        this.loadAllUsers();
      }
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
}
