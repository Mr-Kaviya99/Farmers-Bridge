import {Component, Inject, OnInit} from '@angular/core';
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {LoadingService} from "../../../services/loading/loading.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-keywords-select-pop-up',
  templateUrl: './keywords-select-pop-up.component.html',
  styleUrls: ['./keywords-select-pop-up.component.scss']
})
export class KeywordsSelectPopUpComponent implements OnInit {
  selectedDataArray:any[]=[];
  tempData:any[]=[];

  constructor(
    private snackBarService:SnackBarService,
    public loadingService: LoadingService,
    // private favMusicService:MusicService,
    public dialogRef: MatDialogRef<KeywordsSelectPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    if(this.data?.keywords){
      this.tempData =this.data?.keywords;
      // this.loadData(this.data?.id);
    }


  }

  loadData(id:string){
    /*this.favMusicService.getMusicsForUser(id).subscribe(response=>{
      this.tempData = response.data;
    });*/
  }

  selectData(data:any){
    if(!data.status){
      /*this.favMusicService.updateMusicsData(data?.musicId).subscribe(response=>{

        if(response){
          for(const temp of this.tempData){
            if(data?.musicId==temp.musicId){
              temp.status=true;

              this.snackBarSrvice.openWarningSnackBar("Selected!.",'close');
              this.selectedDataArray.push(temp);
              break;
            }
          }
        }
      });*/
    }
  }

}
