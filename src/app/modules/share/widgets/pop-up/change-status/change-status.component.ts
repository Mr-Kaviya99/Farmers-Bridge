import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent implements OnInit {

  updateData: any
  loadingMessage = '';

  constructor(
    public dialogRef: MatDialogRef<ChangeStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  onClick(status: boolean): void {
    this.dialogRef.close(status);
  }

  ngOnInit(): void {
    console.log(this.data)
    this.updateData = this.data;
    console.log(this.updateData.propertyId)
  }

}
