import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-console-other-all-blog',
  templateUrl: './console-other-all-blog.component.html',
  styleUrls: ['./console-other-all-blog.component.scss']
})
export class ConsoleOtherAllBlogComponent {

  state = 'All';
  allTechnologies: any;
  selectedPropertyId: any;
  resourceLanguages: any;

  searchText: string = '';

  page: number | undefined = 0;
  pageSize: number | undefined = 5;
  pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
  dataCount = 0;
  pageEvent: PageEvent | undefined;


  searchForm = new FormGroup({
    searchText: new FormControl('')
  });
  type: string = 'All';

  deletePopUp(technologiesId: any) {

  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    // this.loadAllTechnologies();
  }

  callDecisionMaker(programTypeId: string) {

  }

  setRole(type: string) {
    this.type = status;
    // this.loadAllUsers();
  }
}
