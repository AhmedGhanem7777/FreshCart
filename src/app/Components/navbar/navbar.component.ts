import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLogin:boolean=false
  constructor(private _AuthService:AuthService){
    this._AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue()!==null){
          this.isLogin=true
        }else{
          this.isLogin=false
        }
      }
    })
  }

  logOut(){
    this._AuthService.logout()
  }

}
