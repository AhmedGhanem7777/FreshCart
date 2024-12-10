import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.scss']
})
export class ResetCodeComponent {

  code:any=''

  constructor(private _AuthService:AuthService,private _Router:Router){}

  resetPass(){
    if(this.code!==null){
      this._AuthService.verifyResetCode(this.code).subscribe({
        next:(res)=>{
          if(res.status==="Success"){
            this._Router.navigate(['/forgetPass/resetPass'])
          }
          
        }
      })
    }
  }
}
