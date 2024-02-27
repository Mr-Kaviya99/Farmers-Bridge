import {Component} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {ImageService} from "../../../services/image/image.service";
import {LoadingService} from "../../../services/loading/loading.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {CookieManagerService} from "../../../services/cookie/cookie-manager.service";
import {ListingService} from "../../../services/listing/listing.service";

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.scss']
})
export class NewListingComponent {

  image: File | undefined;
  imageUrl = '';

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    expireDate: new FormControl(null, [Validators.required]),
    quantity: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });

  constructor(
    private imageService: ImageService,
    private listingService: ListingService,
    private loadingService: LoadingService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
  ) {
  }


  createListing(f: FormGroupDirective) {
    if (!this.image) {
      console.log(this.image)
      this.snackBarService.openWarningSnackBar('Please select Background Image', 'Close');
      return;
    }

    this.loadingService.mainLoader.next(true);
    this.imageService.saveFile(this.image, 'Farmers-Bridge-Resources/listing-Images').then(imageUrl => {
      const userData = JSON.parse(this.cookieManager.getPersonalData());

      console.log(userData.property_id)

      const data = {
        title: this.form.get('title')?.value!,
        expireDate: this.form.get('expireDate')?.value!,
        quantity: this.form.get('quantity')?.value!,
        description: this.form.get('description')?.value!,
        image: imageUrl,
      }
      console.log(data)
      this.listingService.saveListing(data, userData.property_id).subscribe(response => {
        console.log(response);
        if (response.code === 201) {
          this.snackBarService.openSuccessSnackBar('Success!', 'Close');
          this.refreshForm(f);
        }
      });
    }).catch(error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
      this.loadingService.mainLoader.next(false);
    })
  }

  // @ts-ignore
  imageSelected(event) {
    this.image = event.target.files[0];
    console.log(this.image)
    if (this.image!.size > 5.5e+6) {
      // this.snackBarService.openErrorSnackBar('Image Size should not be greater than 5MB', 'Close');
      return false;
    }
    if (
      this.image!.type !== 'image/jpg' && this.image!.type !== 'image/jpeg' && this.image!.type !== "image/png"
    ) {
      // this.snackBarService.openErrorSnackBar('Image type must be (jpg,png or jpeg)', 'Close');
      return false;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.image!);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      console.log(this.imageUrl)
    };
  }

  private refreshForm(form: FormGroupDirective) {
    form.resetForm();
    form.reset();
    this.image = undefined;
    this.imageUrl = '';
  }
}
