import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent {
  email: any = ''

  constructor(private _AuthService:AuthService,private _Router:Router){}



  forgetPass() {
    if(this.email){
      this._AuthService.forgetPass(this.email).subscribe({
        next:(res)=>{
          console.log(res);

          this._AuthService.currentEmail.next(this.email)
          
          if(res.statusMsg==="success"){
            this._Router.navigate(['forgetPass/resetCode'])
          }
        }
      })
    }
  }
}
