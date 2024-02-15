import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-console-general-all-user',
  templateUrl: './console-general-all-user.component.html',
  styleUrls: ['./console-general-all-user.component.scss']
})
export class ConsoleGeneralAllUserComponent {

  allTechnologies: any;
  selectedPropertyId: any;
  resourceLanguages: any;

  searchText: string = '';
  role: string = 'All';

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  searchForm = new FormGroup({
    searchText: new FormControl('')
  });

  setType(role: string) {
    this.role = role;
    // this.loadAllUsers();
  }
  deletePopUp(technologiesId: any) {

  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    // this.loadAllTechnologies();
  }

  callDecisionMaker(programTypeId: string) {

  }
}
