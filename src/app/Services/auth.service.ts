import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData=new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if (localStorage.getItem('userToken') !== null) {
      this.decodeUserData();
    }else{
      this._Router.navigate(["/home"])
    }
  }

  register(userData:object):Observable<any>{
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    );
  }

  login(userData:object):Observable<any>{
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      userData
    );
  }

  decodeUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem("userToken"))
    let decodedToken:any=jwtDecode(encodedToken)
    console.log("decodedToken",decodedToken);
    this.userData.next(decodedToken)
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/signin']);
  }

  forgetPass(email:any): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
      {
        email
      }
    );
  }

  verifyResetCode(resetCode:any): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
      {
        resetCode
      }
    );
  }

  currentEmail=new BehaviorSubject(null)

  resetPass(email:any,newPass:any): Observable<any> {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
      {
        email:email,
        newPassword:newPass,
      }
    );
  }

}
