import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";
import {AuthService} from "../../../share/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });

  constructor(
    private snackBarService: SnackBarService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  signUp() {
    if (this.form.get('password')?.value! != this.form.get('confirmPassword')?.value!) {
      this.snackBarService.openWarningSnackBar('Password does not match!', 'close');
      return;
    }
    let data = {
      email: this.form.get('email')?.value!,
      firstName: this.form.get('firstName')?.value!,
      lastName: this.form.get('lastName')?.value!,
      password: this.form.get('confirmPassword')?.value!,
      role: this.form.get('role')?.value!,
    }
    console.log(data)
    this.authService.register(data).subscribe(response => {
      if (response.code === 201) {
        this.snackBarService.openSuccessSnackBar('Success!', 'Close');
        this.router.navigateByUrl('/security/login').then();
      }
    })
  }
}
