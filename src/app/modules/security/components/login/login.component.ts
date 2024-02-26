import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {AuthService} from "../../../share/services/auth/auth.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {first} from "rxjs";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService
  ) {
  }

  login() {
    this.authService.login(
      this.loginForm.get('email')?.value!,
      this.loginForm.get('password')?.value!
    )
      .pipe(first())
      .subscribe(
        (data: HttpResponse<any>) => {
          console.log(data);
          if (data.body.code === 200) {
            this.cookieManager.setToken(data.body.data.userId + '&' + data.body.data.firstName + '&' + data.body.data.lastName + '&' + data.body.data.role[0]);
            this.cookieManager.setPersonalData(data.body.data);
            this.router.navigateByUrl('/security/verification').then();
          } else {
            // Handle success with non-200 code (if needed)
          }
        },
        (error: HttpErrorResponse) => {
          // Handle error response here without console.error
          if (error.status === 400) {
            this.snackBarService.openWarningSnackBar('Invalid Email or Password', 'close');
          } else {
            // Handle other error cases without console.error
            // You can access error.json() here for the error details
          }
        }
      );
  }

  ngOnInit(): void {
    if (this.cookieManager.tokenIsExists('token')){
      this.router.navigateByUrl('/security/verification').then();
    }
  }
}
