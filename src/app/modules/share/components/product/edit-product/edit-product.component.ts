import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productId: string = '';
  productDetails: [] = [];

  form = new FormGroup({
    productName: new FormControl(null, [Validators.required]),
    productType: new FormControl(null, [Validators.required]),
    quantity: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });

  constructor(
    private productService: ProductService,
    private snackBarService: SnackBarService,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  loadProgramById() {
    this.productService.productById(this.productId).subscribe(response => {
      this.productDetails = response.data;
      if (this.productDetails) {
        this.form.patchValue({
          productName: response.data?.programName,
          productType: response.data?.description,
          quantity: response.data?.aboutTheTrainer,
          price: response.data?.hours,
          description: response.data?.duration
        })
      }
      console.log(this.productDetails)
    }, error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  ngOnInit(): void {
    this.productId = this.data[0]?.productId;
    this.loadProgramById();
  }

  updateProduct(form: FormGroupDirective) {

    let data = {}

    this.productService.editProduct(this.productId, data).subscribe(response => {
      if (response.code === 201) {
        this.snackBarService.openSuccessSnackBar('Success!', 'Close');
        this.refreshForm(form);
        this.dialogRef.close()
      }
    }, error => {
      this.refreshForm(form);
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }

  private refreshForm(form: FormGroupDirective) {
    form.resetForm();
  }
}
