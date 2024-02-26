import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeleteInfo} from "../../../services/dto/delete-info/delete-info";

@Component({
  selector: 'app-delete-info',
  templateUrl: './delete-info.component.html',
  styleUrls: ['./delete-info.component.scss']
})
export class DeleteInfoComponent implements OnInit {

  deleteData: any
  loadingMessage = '';

  constructor(
    public dialogRef: MatDialogRef<DeleteInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteInfo,
  ) {
  }

  onClick(status:boolean): void {
    this.dialogRef.close(status);
  }

  ngOnInit(): void {
    this.deleteData = this.data;
  }

}
