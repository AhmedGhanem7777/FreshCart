import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPassRoutingModule } from './forget-pass-routing.module';
import { ForgetPassComponent } from './forget-pass.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { FormsModule } from '@angular/forms';
import { ResetPassComponent } from './reset-pass/reset-pass.component';


@NgModule({
  declarations: [
    ForgetPassComponent,
    ResetCodeComponent,
    ForgotPassComponent,
    ResetPassComponent,
  ],
  imports: [
    CommonModule,
    ForgetPassRoutingModule,
    FormsModule
  ]
})
export class ForgetPassModule { }
