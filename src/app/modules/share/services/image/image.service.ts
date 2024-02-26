import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private afAuth: AngularFireAuth,
              private storage: AngularFireStorage,) {
  }

  generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
  }

  public saveFile(file: any, dubDirectory: string): Promise<any> {

    return new Promise((resolve, reject) => {

      const folderPath = dubDirectory;
      const randomId = this.generateRandomId(6); // Generate a random 6-digit ID
      const uniqueFileName = `${randomId}_${file.name}`;
      const filePath = `${folderPath}/${uniqueFileName}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(downloadURL => {
            resolve(downloadURL);
          });
        })
      ).subscribe(progress => {
        // Update the upload progress if needed
      }, error => {
        reject(error);
      });

    });

  }
}
