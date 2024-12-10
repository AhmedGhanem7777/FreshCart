import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}

  // Password Hide
  hide: boolean = true;
  
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }


  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null),
  })

  handleLogin(loginForm:FormGroup){
    if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe({
        next:(res)=>{
          if(res.message==="success"){
            localStorage.setItem("userToken",res.token)
            this._AuthService.decodeUserData()
            this._Router.navigate(["/home"])
          }
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }


}
