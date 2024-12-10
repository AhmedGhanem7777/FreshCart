import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit{
  email:any=''
  newPassword:any=''

  constructor(private _AuthService:AuthService,private _Router:Router){}

  ngOnInit(): void {
    this.getCurrentEmail()
  }

  getCurrentEmail(){
    this._AuthService.currentEmail.subscribe({
      next: (res) => {
        console.log('current email', res);

        this.email = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  saveNewPass(email:any,newPassword:any){
    if(email!==null && newPassword!==null){
      this._AuthService.resetPass(email,newPassword).subscribe({
        next:(res)=>{
          console.log(res);
          
          localStorage.setItem('userToken', res.token)
          this._Router.navigate(['/home'])
        }
      })
    }
  }
}
