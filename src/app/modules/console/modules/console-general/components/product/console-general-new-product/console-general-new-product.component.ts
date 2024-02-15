import {Component} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-console-general-new-product',
  templateUrl: './console-general-new-product.component.html',
  styleUrls: ['./console-general-new-product.component.scss']
})
export class ConsoleGeneralNewProductComponent {

  image: File | undefined;
  imageUrl = '';

  form = new FormGroup({
    productName: new FormControl(null, [Validators.required]),
    productType: new FormControl(null, [Validators.required]),
    quantity: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });


  createProduct(f: FormGroupDirective) {

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

}
