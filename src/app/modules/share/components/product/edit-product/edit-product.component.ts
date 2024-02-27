import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {ProductService} from "../../../services/product/product.service";
import {ImageService} from "../../../services/image/image.service";
import {LoadingService} from "../../../services/loading/loading.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  image: File | undefined;
  imageUrl = '';

  productId: string = '';
  productDetails: [] = [];

  form = new FormGroup({
    productName: new FormControl(null, [Validators.required]),
    productType: new FormControl(null, [Validators.required]),
    quantity: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });
  productImage = '';

  constructor(
    private productService: ProductService,
    private snackBarService: SnackBarService,
    private loadingService: LoadingService,
    private imageService: ImageService,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  loadProgramById() {
    this.productService.productById(this.productId).subscribe(response => {
      this.productDetails = response.data;
      if (this.productDetails) {
        this.imageUrl = response.data?.imageUrl;
        this.form.patchValue({
          productName: response.data?.productName,
          productType: response.data?.productType,
          quantity: response.data?.qty,
          price: response.data?.price,
          description: response.data?.description
        })
      }
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  ngOnInit(): void {
    console.log(this.data)
    this.productId = this.data[0]?.propertyId;
    this.loadProgramById();
  }

  updateProduct(form: FormGroupDirective) {

    // @ts-ignore
    if (this.productDetails.imageUrl === this.imageUrl) {
      this.productImage = this.imageUrl;
      const data = {
        productName: this.form.get('productName')?.value!,
        productType: this.form.get('productType')?.value!,
        qty: this.form.get('quantity')?.value!,
        price: this.form.get('price')?.value!,
        description: this.form.get('description')?.value!,
        imageUrl: this.productImage,
      }
      console.log(data)
      this.productService.editProduct(this.productId, data).subscribe(response => {
        console.log(response);
        if (response.code === 201) {
          this.dialogRef.close()
          this.snackBarService.openSuccessSnackBar('Success!', 'Close');
          this.refreshForm(form);
        }
      });
    } else {
      this.loadingService.mainLoader.next(true);
      this.imageService.saveFile(this.image, 'Farmers-Bridge-Resources/product-Images').then(imageUrl => {
        this.productImage = imageUrl;
        const data = {
          productName: this.form.get('productName')?.value!,
          productType: this.form.get('productType')?.value!,
          qty: this.form.get('quantity')?.value!,
          price: this.form.get('price')?.value!,
          description: this.form.get('description')?.value!,
          imageUrl: this.productImage,
        }
        console.log(data)
        this.productService.editProduct(this.productId, data).subscribe(response => {
          console.log(response);
          if (response.code === 201) {
            this.dialogRef.close()
            this.snackBarService.openSuccessSnackBar('Success!', 'Close');
            this.refreshForm(form);
          }
        });
      }).catch(error => {
        this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        this.loadingService.mainLoader.next(false);
      })
    }
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
  }
}
