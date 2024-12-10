import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const routes: Routes = [
  { path: '', redirectTo:'forgotPass',pathMatch:'full' },
  { path: 'forgotPass', component: ForgotPassComponent },
  { path: 'resetCode', component: ResetCodeComponent },
  { path: 'resetPass', component: ResetPassComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPassRoutingModule { }
