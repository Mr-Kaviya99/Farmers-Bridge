import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatDialog} from "@angular/material/dialog";
import {EditSectionData} from "../../../services/dto/edit-section/EditSectionData";
import {EditSectionOptionData} from "../../../services/dto/edit-section/EditSectionOptionData";

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {

  details: any;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<EditSectionComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: EditSectionData,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.details = this.data;
  }

  navigate(option: EditSectionOptionData) {
    // switch (option?.navigationType) {
    //   case NavigateOption.POPUP:
    //     // @ts-ignore
    const dialogRef = this.dialog.open(option?.component, {
      data: [{propertyId: option?.propertyId, extra: option?.extra}],
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bottomSheetRef.dismiss(result);
      } else {
        this.bottomSheetRef.dismiss();
      }

    });
    // }
  }

}
