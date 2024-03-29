import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import { VerificationPoolComponent } from './components/verification-pool/verification-pool.component';


@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    SignupComponent,
    VerificationPoolComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class SecurityModule { }
