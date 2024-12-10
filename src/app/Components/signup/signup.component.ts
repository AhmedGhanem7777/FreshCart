import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}

  // Password Hide
  hide: boolean = true;
  
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }


  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  handleRegister(registerForm:FormGroup){
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message==="success"){
            this._Router.navigate(["/signin"])
          }
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }



}
