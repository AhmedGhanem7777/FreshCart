import './polyfills.server.mjs';
import{a as L}from"./chunk-3T2UL7EU.mjs";import{a as F,b as u,c as M,d as T,e as $,f as se,g as j,h as le,i as I,j as O,k as N,l as me,m as de,n as U,o as pe,p as ce,q as k}from"./chunk-AZEHDMCX.mjs";import{a as ae}from"./chunk-ZYZHR6RT.mjs";import"./chunk-J4BDXTMW.mjs";import{$ as o,B as y,Bb as oe,C as H,Da as s,Ea as S,Fa as V,Ha as te,Ia as ie,Ja as ne,Lb as E,Ma as b,Mb as x,Ob as X,aa as f,ja as p,la as l,n as B,na as h,nb as P,qa as n,ra as i,rb as re,sa as c,v as W,xa as C,ya as v}from"./chunk-ZYZ23JN3.mjs";import"./chunk-VVCT4QZE.mjs";var we=()=>["../forgot-pass"],Ce=()=>["../register"];function be(t,d){if(t&1&&(n(0,"p",25),s(1),i()),t&2){let r=v();o(),S(r.apiError)}}function ye(t,d){t&1&&(n(0,"div",26),s(1," Please enter a valid email address. "),i())}function Se(t,d){t&1&&(n(0,"span"),s(1,"Password is required."),i())}function Pe(t,d){t&1&&(n(0,"span"),s(1,"Password must be at least 6 characters long."),i())}function Ee(t,d){t&1&&(n(0,"span"),s(1,"Password must start with an uppercase letter and contain only lowercase letters or digits."),i())}function xe(t,d){if(t&1&&(n(0,"div",27),p(1,Se,2,0,"span",21)(2,Pe,2,0,"span",21)(3,Ee,2,0,"span",21),i()),t&2){let r,a,e,m=v();o(),l("ngIf",(r=m.loginForm.get("password"))==null||r.errors==null?null:r.errors.required),o(),l("ngIf",(a=m.loginForm.get("password"))==null||a.errors==null?null:a.errors.minlength),o(),l("ngIf",(e=m.loginForm.get("password"))==null||e.errors==null?null:e.errors.pattern)}}function Fe(t,d){t&1&&(n(0,"span"),s(1,"Log in"),i())}function Me(t,d){t&1&&(n(0,"span"),c(1,"i",28),s(2," Signing in... "),i())}var ue=(()=>{class t{constructor(r,a,e){this._Router=r,this._AuthService=a,this._ToastrService=e,this.isLoading=!1,this.apiError="",this.name="",this.loginForm=new $({email:new j("",[u.required,u.email]),password:new j("",[u.required,u.minLength(6),u.pattern(/^[A-Z][a-z0-9]{5,10}$/)])})}onSubmit(r){if(r.valid){let a=this._ToastrService.info("Waiting...","",{timeOut:0,extendedTimeOut:0});this.isLoading=!0,this._AuthService.login(r.value).subscribe({next:e=>{this.isLoading=!1,e.message==="success"&&(localStorage.setItem("userToken",e.token),this._AuthService.decodeUserData(),this._AuthService.userData.subscribe({next:m=>{this.name=m?.name}}),setTimeout(()=>{this._ToastrService.clear(a.toastId),this._ToastrService.success(`Welcome Back ${this.name}`),this._Router.navigate(["public/home"])},500))},error:e=>{this.isLoading=!1,this.apiError=e.error.message,setTimeout(()=>{this._ToastrService.clear(a.toastId),this._ToastrService.error("Login Failed")},500)},complete:()=>{this.isLoading=!1}})}else this._ToastrService.warning("Please fill in the form correctly")}static{this.\u0275fac=function(a){return new(a||t)(f(E),f(k),f(L))}}static{this.\u0275cmp=y({type:t,selectors:[["app-login"]],decls:33,vars:15,consts:[[1,"login-section"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"login-card"],[1,"user-icon"],[1,"icon-circle"],["aria-label","User Icon",1,"fas","fa-user"],[1,"card-content"],[1,"title"],[1,"subtitle"],["class","api-error my-3 text-center",4,"ngIf"],["novalidate","",1,"login-form",3,"ngSubmit","formGroup"],[1,"input-group"],["for","email","aria-label","Email Address",1,"input-label"],["type","email","id","email","formControlName","email","placeholder","Enter your email","aria-describedby","emailHelp",1,"form-input"],["id","emailHelp","class","input-hint",4,"ngIf"],["for","password","aria-label","Password",1,"input-label"],["type","password","id","password","formControlName","password","placeholder","Enter your password",1,"form-input"],["class","input-hint",4,"ngIf"],["type","submit",1,"submit-btn",3,"disabled"],[4,"ngIf"],[1,"actions"],["aria-label","Forgot your password?",1,"forgot-link",3,"routerLink"],["type","button","aria-label","Create New Account",1,"create-account-btn",3,"routerLink"],[1,"api-error","my-3","text-center"],["id","emailHelp",1,"input-hint"],[1,"input-hint"],[1,"fas","fa-spinner","fa-spin","me-2"]],template:function(a,e){if(a&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),c(7,"i",7),i()(),n(8,"div",8)(9,"h2",9),s(10,"Welcome Back"),i(),n(11,"p",10),s(12,"Sign in to continue to your account"),i(),p(13,be,2,1,"p",11),n(14,"form",12),C("ngSubmit",function(){return e.onSubmit(e.loginForm)}),n(15,"div",13)(16,"label",14),s(17,"Email address"),i(),c(18,"input",15),p(19,ye,2,0,"div",16),i(),n(20,"div",13)(21,"label",17),s(22,"Password"),i(),c(23,"input",18),p(24,xe,4,3,"div",19),i(),n(25,"button",20),p(26,Fe,2,0,"span",21)(27,Me,3,0,"span",21),i(),n(28,"div",22)(29,"a",23),s(30,"Forgot your password?"),i(),n(31,"button",24),s(32," Create New Account "),i()()()()()()()()()),a&2){let m,g,_,w;o(13),l("ngIf",e.apiError),o(),l("formGroup",e.loginForm),o(4),h("is-invalid",((m=e.loginForm.get("email"))==null?null:m.invalid)&&((m=e.loginForm.get("email"))==null?null:m.touched)),o(),l("ngIf",((g=e.loginForm.get("email"))==null?null:g.invalid)&&((g=e.loginForm.get("email"))==null?null:g.touched)),o(4),h("is-invalid",((_=e.loginForm.get("password"))==null?null:_.invalid)&&((_=e.loginForm.get("password"))==null?null:_.touched)),o(),l("ngIf",((w=e.loginForm.get("password"))==null?null:w.invalid)&&((w=e.loginForm.get("password"))==null?null:w.touched)),o(),l("disabled",e.loginForm.invalid||e.isLoading),o(),l("ngIf",!e.isLoading),o(),l("ngIf",e.isLoading),o(2),l("routerLink",b(13,we)),o(2),l("routerLink",b(14,Ce))}},dependencies:[P,x,I,F,M,T,O,N],styles:[".actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem;animation:_ngcontent-%COMP%_fadeIn .8s .4s cubic-bezier(.4,0,.2,1) forwards}.create-account-btn[_ngcontent-%COMP%]{background:transparent;border:2px solid var(--main-color);color:var(--main-color);padding:.75rem 2rem;border-radius:12px;font-weight:600;font-size:.875rem;transition:all .3s ease;cursor:pointer}.create-account-btn[_ngcontent-%COMP%]:hover{background:var(--main-color);color:#fff;transform:translateY(-2px)}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"]})}}return t})();var Te=()=>["../login"];function Ie(t,d){if(t&1&&(n(0,"p",29),s(1),i()),t&2){let r=v();o(),S(r.apiError)}}function ke(t,d){t&1&&(n(0,"div",30),s(1," Name must be at least 3 characters long "),i())}function Le(t,d){t&1&&(n(0,"div",30),s(1," Please enter a valid email address "),i())}function Oe(t,d){t&1&&(n(0,"span"),s(1," Password is required. "),i())}function Ne(t,d){t&1&&(n(0,"span"),s(1," Password must be at least 6 characters long. "),i())}function Re(t,d){t&1&&(n(0,"span"),s(1," Password must start with an uppercase letter and contain only lowercase letters or digits. "),i())}function Ae(t,d){if(t&1&&(n(0,"div",30),p(1,Oe,2,0,"span",26)(2,Ne,2,0,"span",26)(3,Re,2,0,"span",26),i()),t&2){let r,a,e,m=v();o(),l("ngIf",(r=m.registerForm.get("password"))==null||r.errors==null?null:r.errors.required),o(),l("ngIf",(a=m.registerForm.get("password"))==null||a.errors==null?null:a.errors.minlength),o(),l("ngIf",(e=m.registerForm.get("password"))==null||e.errors==null?null:e.errors.pattern)}}function Ve(t,d){t&1&&(n(0,"div",30),s(1," Passwords do not match "),i())}function je(t,d){t&1&&(n(0,"span"),s(1," Phone number is required. "),i())}function ze(t,d){t&1&&(n(0,"span"),s(1," The phone number is incorrect, it should start with 01 and then 0, 1, 2 or 5, followed by 8 digits. "),i())}function De(t,d){if(t&1&&(n(0,"div",30),p(1,je,2,0,"span",26)(2,ze,2,0,"span",26),i()),t&2){let r,a,e=v();o(),l("ngIf",(r=e.registerForm.get("phone"))==null||r.errors==null?null:r.errors.required),o(),l("ngIf",(a=e.registerForm.get("phone"))==null||a.errors==null?null:a.errors.pattern)}}function qe(t,d){t&1&&(n(0,"span"),s(1,"Create Account"),i())}function Ge(t,d){t&1&&(n(0,"span"),c(1,"i",31),s(2," Creating Account... "),i())}var ge=(()=>{class t{constructor(r,a,e,m){this._FormBuilder=r,this._AuthService=a,this._Router=e,this._ToastrService=m,this.isLoading=!1,this.apiError="",this.registerForm=this._FormBuilder.group({name:["",[u.required,u.minLength(3)]],email:["",[u.required,u.email]],password:["",[u.required,u.minLength(6),u.pattern(/^[A-Z][a-z0-9]{5,10}$/)]],rePassword:["",[u.required]],phone:["",[u.required,u.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]]},{validators:this.passwordMatchValidator})}passwordMatchValidator(r){return r.get("password")?.value===r.get("rePassword")?.value?null:{mismatch:!0}}onSubmit(r){if(r.valid){this.isLoading=!0;let a=this._ToastrService.info("Waiting...","",{timeOut:0});this._AuthService.register(r.value).subscribe({next:e=>{this._ToastrService.clear(a.toastId),e.message==="success"&&(this.isLoading=!1,this._ToastrService.success("Registration successful! Welcome to FreshCart. Please Login"),this._Router.navigate(["auth/login"]))},error:e=>{this.isLoading=!1,this.apiError=e.error.message,this._ToastrService.clear(a.toastId),this._ToastrService.error(this.apiError),r.reset()}})}else this._ToastrService.error("Please fill all required fields correctly.")}static{this.\u0275fac=function(a){return new(a||t)(f(U),f(k),f(E),f(L))}}static{this.\u0275cmp=y({type:t,selectors:[["app-register"]],decls:46,vars:22,consts:[[1,"register-section","mt-5"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-6"],[1,"register-card"],[1,"user-icon"],[1,"icon-circle"],[1,"fas","fa-user-plus"],[1,"card-content"],[1,"title"],[1,"subtitle"],["class","api-error text-center",4,"ngIf"],[1,"register-form",3,"ngSubmit","formGroup"],[1,"input-group"],["for","name",1,"input-label"],["type","text","id","name","formControlName","name","placeholder","Enter your full name",1,"form-input"],["class","input-hint",4,"ngIf"],["for","email",1,"input-label"],["type","email","id","email","formControlName","email","placeholder","Enter your email",1,"form-input"],["for","password",1,"input-label"],["type","password","id","password","formControlName","password","placeholder","Enter your password",1,"form-input"],["for","rePassword",1,"input-label"],["type","password","id","rePassword","formControlName","rePassword","placeholder","Confirm your password",1,"form-input"],["for","phone",1,"input-label"],["type","tel","id","phone","formControlName","phone","placeholder","Enter your phone number",1,"form-input"],["type","submit",1,"submit-btn",3,"disabled"],[4,"ngIf"],[1,"actions"],[1,"login-link",3,"routerLink"],[1,"api-error","text-center"],[1,"input-hint"],[1,"fas","fa-spinner","fa-spin","me-2"]],template:function(a,e){if(a&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),c(7,"i",7),i()(),n(8,"div",8)(9,"h2",9),s(10,"Create Account"),i(),n(11,"p",10),s(12,"Join us today and start your journey"),i(),p(13,Ie,2,1,"p",11),n(14,"form",12),C("ngSubmit",function(){return e.onSubmit(e.registerForm)}),n(15,"div",13)(16,"label",14),s(17,"Full Name"),i(),c(18,"input",15),p(19,ke,2,0,"div",16),i(),n(20,"div",13)(21,"label",17),s(22,"Email Address"),i(),c(23,"input",18),p(24,Le,2,0,"div",16),i(),n(25,"div",13)(26,"label",19),s(27,"Password"),i(),c(28,"input",20),p(29,Ae,4,3,"div",16),i(),n(30,"div",13)(31,"label",21),s(32,"Confirm Password"),i(),c(33,"input",22),p(34,Ve,2,0,"div",16),i(),n(35,"div",13)(36,"label",23),s(37,"Phone Number"),i(),c(38,"input",24),p(39,De,3,2,"div",16),i(),n(40,"button",25),p(41,qe,2,0,"span",26)(42,Ge,3,0,"span",26),i(),n(43,"div",27)(44,"a",28),s(45," Already have an account? Sign in "),i()()()()()()()()()),a&2){let m,g,_,w,R,z,D,ee,q,G;o(13),l("ngIf",e.apiError),o(),l("formGroup",e.registerForm),o(4),h("is-invalid",((m=e.registerForm.get("name"))==null?null:m.invalid)&&((m=e.registerForm.get("name"))==null?null:m.touched)),o(),l("ngIf",((g=e.registerForm.get("name"))==null?null:g.invalid)&&((g=e.registerForm.get("name"))==null?null:g.touched)),o(4),h("is-invalid",((_=e.registerForm.get("email"))==null?null:_.invalid)&&((_=e.registerForm.get("email"))==null?null:_.touched)),o(),l("ngIf",((w=e.registerForm.get("email"))==null?null:w.invalid)&&((w=e.registerForm.get("email"))==null?null:w.touched)),o(4),h("is-invalid",((R=e.registerForm.get("password"))==null?null:R.invalid)&&((R=e.registerForm.get("password"))==null?null:R.touched)),o(),l("ngIf",((z=e.registerForm.get("password"))==null?null:z.invalid)&&((z=e.registerForm.get("password"))==null?null:z.touched)),o(4),h("is-invalid",(((D=e.registerForm.get("rePassword"))==null?null:D.invalid)||e.registerForm.hasError("mismatch"))&&((D=e.registerForm.get("rePassword"))==null?null:D.touched)),o(),l("ngIf",e.registerForm.hasError("mismatch")&&((ee=e.registerForm.get("rePassword"))==null?null:ee.touched)),o(4),h("is-invalid",((q=e.registerForm.get("phone"))==null?null:q.invalid)&&((q=e.registerForm.get("phone"))==null?null:q.touched)),o(),l("ngIf",((G=e.registerForm.get("phone"))==null?null:G.invalid)&&((G=e.registerForm.get("phone"))==null?null:G.touched)),o(),l("disabled",e.registerForm.invalid||e.isLoading),o(),l("ngIf",!e.isLoading),o(),l("ngIf",e.isLoading),o(2),l("routerLink",b(21,Te))}},dependencies:[P,x,I,F,M,T,O,N],styles:[".actions[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem;animation:fadeIn .8s .4s cubic-bezier(.4,0,.2,1) forwards}"]})}}return t})();var Be=()=>["../login"];function We(t,d){if(t&1&&(n(0,"div",22),s(1),i()),t&2){let r=v();o(),S(r.apiError)}}function He(t,d){t&1&&(n(0,"div",23),s(1," Please enter a valid email address. "),i())}function $e(t,d){t&1&&(n(0,"span"),s(1,"Reset Password"),i())}function Ue(t,d){t&1&&(n(0,"span"),c(1,"i",24),s(2," Sending... "),i())}var fe=(()=>{class t{constructor(r,a,e){this._AuthService=r,this._Router=a,this._ToastrService=e,this.isLoading=!1,this.apiError="",this.forgotForm=new $({email:new j("",[u.required,u.email])})}onSubmit(){if(this.forgotForm.valid){this.isLoading=!0;let r=this.forgotForm.get("email").value;if(r){let a=this._ToastrService.info("Waiting...","",{timeOut:5e3});this._AuthService.forgotPassword(r).subscribe({next:e=>{this._ToastrService.clear(a.toastId),e.statusMsg&&(this._AuthService.currentEmail.next(r),this._Router.navigate(["auth/verify-email"]),this._ToastrService.success("Reset code sent to your email")),this.isLoading=!1},error:e=>{this.isLoading=!1,this.apiError=e.error.message,this._ToastrService.clear(a.toastId),this._ToastrService.error(this.apiError,"Error")}})}else this._ToastrService.error("Please enter a valid email address")}}static{this.\u0275fac=function(a){return new(a||t)(f(k),f(E),f(L))}}static{this.\u0275cmp=y({type:t,selectors:[["app-forgot-pass"]],decls:27,vars:10,consts:[["aria-labelledby","forgot-password-title",1,"forgot-password"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"forgot-card"],[1,"lock-icon"],[1,"icon-circle"],["aria-hidden","true",1,"fas","fa-lock"],[1,"card-content"],["id","forgot-password-title",1,"title"],[1,"subtitle"],["class","api-error text-center py-3",4,"ngIf"],["aria-live","assertive",1,"forgot-form",3,"ngSubmit","formGroup"],[1,"email-input-group"],["for","email",1,"input-label"],["type","email","id","email","formControlName","email","placeholder","Enter your email","aria-describedby","email-hint","required","",1,"email-input"],["class","input-hint","id","email-hint",4,"ngIf"],["type","submit","aria-label","Submit reset password",1,"reset-btn",3,"disabled"],[4,"ngIf"],[1,"actions"],["aria-label","Back to login page",1,"back-link",3,"routerLink"],["aria-hidden","true",1,"fas","fa-chevron-left","me-2"],[1,"api-error","text-center","py-3"],["id","email-hint",1,"input-hint"],[1,"fas","fa-spinner","fa-spin","me-2"]],template:function(a,e){if(a&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),c(7,"i",7),i()(),n(8,"div",8)(9,"h2",9),s(10,"Forgot your password?"),i(),n(11,"p",10),s(12,"Enter your email address and we'll send you instructions to reset your password."),i(),p(13,We,2,1,"div",11),n(14,"form",12),C("ngSubmit",function(){return e.onSubmit()}),n(15,"div",13)(16,"label",14),s(17,"Email address"),i(),c(18,"input",15),p(19,He,2,0,"div",16),i(),n(20,"button",17),p(21,$e,2,0,"span",18)(22,Ue,3,0,"span",18),i()(),n(23,"div",19)(24,"a",20),c(25,"i",21),s(26," Back to login "),i()()()()()()()()),a&2){let m,g;o(13),l("ngIf",e.apiError),o(),l("formGroup",e.forgotForm),o(4),h("is-invalid",((m=e.forgotForm.get("email"))==null?null:m.invalid)&&((m=e.forgotForm.get("email"))==null?null:m.touched)),o(),l("ngIf",((g=e.forgotForm.get("email"))==null?null:g.invalid)&&((g=e.forgotForm.get("email"))==null?null:g.touched)),o(),l("disabled",e.forgotForm.invalid||e.isLoading),o(),l("ngIf",!e.isLoading),o(),l("ngIf",e.isLoading),o(2),l("routerLink",b(9,Be))}},dependencies:[P,x,I,F,M,T,me,O,N],styles:[".lock-icon[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--main-color) 0%,#0099cc 100%);padding:3rem 0;text-align:center;margin-bottom:2rem;position:relative;overflow:hidden;transition:padding .3s ease}.forgot-form[_ngcontent-%COMP%]{margin-bottom:2rem;animation:fadeInUp .6s cubic-bezier(.4,0,.2,1) forwards}.email-input-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}.actions[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1.5rem;animation:fadeIn .8s .4s cubic-bezier(.4,0,.2,1) forwards}.back-link[_ngcontent-%COMP%]{color:#718096;text-decoration:none;font-size:.875rem;display:flex;align-items:center;transition:all .3s cubic-bezier(.4,0,.2,1);padding:.5rem 1rem;border-radius:8px}.back-link[_ngcontent-%COMP%]:hover{color:var(--main-color);transform:translate(-5px);background:#00b4e80d}.back-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.back-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translate(-4px)}@media (max-width: 320px){.forgot-password[_ngcontent-%COMP%]{padding:.5rem}.card-content[_ngcontent-%COMP%]{padding:0 1rem 1rem}.title[_ngcontent-%COMP%]{font-size:1.125rem}}@media (max-height: 600px) and (orientation: landscape){.forgot-password[_ngcontent-%COMP%]{padding:1rem;min-height:auto}.lock-icon[_ngcontent-%COMP%]{padding:1.5rem 0}.icon-circle[_ngcontent-%COMP%]{width:60px;height:60px}.card-content[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem}}"]})}}return t})();var Ye=()=>["../forgot-pass"];function Ze(t,d){if(t&1&&(n(0,"div",24),s(1),i()),t&2){let r=v();o(),S(r.errorMessage)}}function Je(t,d){t&1&&(n(0,"span"),s(1,"Verify Email"),i())}function Ke(t,d){t&1&&(n(0,"span"),s(1,"Verifying..."),i())}function Qe(t,d){t&1&&c(0,"i",25)}var he=(()=>{class t{constructor(r,a,e){this._AuthService=r,this._Router=a,this._ToastrService=e,this.state={resetCode:"",isShaking:!1,timeLeft:0},this.resendTimer=null,this.isLoading=!1,this.errorMessage=""}onSubmit(){if(!this.isValidCode()){this.handleInvalidCode();return}this.verifyCode()}resendCode(){this.state.timeLeft>0||(this.state.timeLeft=30,this.startResendTimer(),this._ToastrService.info("Sending reset code...","",{timeOut:0}))}ngOnDestroy(){this.clearResendTimer()}isValidCode(){return this.state.resetCode?.trim().length>0}handleInvalidCode(){this.state.isShaking=!0,this.errorMessage="Please enter a valid code",this._ToastrService.error(this.errorMessage),setTimeout(()=>{this.state.isShaking=!1,this.errorMessage=""},2e3)}verifyCode(){this.isLoading=!0,this.errorMessage="",this._ToastrService.info("Verifying code...","",{timeOut:0}),this._AuthService.verifyResetCode(this.state.resetCode).pipe(B(()=>this.isLoading=!1)).subscribe({next:r=>{this._ToastrService.clear(),r.status==="Success"&&(this._ToastrService.success("Code verified successfully!"),this._Router.navigate(["auth/new-pass"]))},error:r=>{this._ToastrService.clear(),this.errorMessage=r.error?.message||"Verification failed. Please try again.",this.handleInvalidCode()}})}startResendTimer(){this.clearResendTimer(),this.resendTimer=setInterval(()=>{this.state.timeLeft>0?this.state.timeLeft--:this.clearResendTimer()},1e3)}clearResendTimer(){this.resendTimer&&(clearInterval(this.resendTimer),this.resendTimer=null)}static{this.\u0275fac=function(a){return new(a||t)(f(k),f(E),f(L))}}static{this.\u0275cmp=y({type:t,selectors:[["app-verify-email"]],decls:31,vars:14,consts:[[1,"verify-email"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"verification-card"],[1,"email-icon"],[1,"icon-circle"],[1,"fa-regular","fa-envelope"],[1,"card-content"],[1,"title"],[1,"subtitle"],[1,"verification-form",3,"ngSubmit"],[1,"code-input-group"],["for","email",1,"visually-hidden"],["type","text","id","email","name","email","placeholder","Enter verification code","maxlength","6",1,"code-input",3,"ngModelChange","ngModel"],[1,"code-hint"],["class","error-message text-center text-danger",4,"ngIf"],["type","submit",1,"verify-btn",3,"disabled"],[4,"ngIf"],["class","fas fa-arrow-right ms-2",4,"ngIf"],[1,"actions"],[1,"back-link",3,"routerLink"],[1,"fas","fa-chevron-left","me-2"],[1,"resend-btn",3,"click","disabled"],[1,"error-message","text-center","text-danger"],[1,"fas","fa-arrow-right","ms-2"]],template:function(a,e){a&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),c(7,"i",7),i()(),n(8,"div",8)(9,"h2",9),s(10,"Check your email"),i(),n(11,"p",10),s(12,"We've sent a verification code to your email address"),i(),n(13,"form",11),C("ngSubmit",function(){return e.onSubmit()}),n(14,"div",12)(15,"label",13),s(16,"Verification Code"),i(),n(17,"input",14),ne("ngModelChange",function(g){return ie(e.state.resetCode,g)||(e.state.resetCode=g),g}),i(),n(18,"div",15),s(19,"Enter the digit code"),i(),p(20,Ze,2,1,"div",16),i(),n(21,"button",17),p(22,Je,2,0,"span",18)(23,Ke,2,0,"span",18)(24,Qe,1,0,"i",19),i()(),n(25,"div",20)(26,"a",21),c(27,"i",22),s(28," Back to password reset "),i(),n(29,"button",23),C("click",function(){return e.resendCode()}),s(30),i()()()()()()()()),a&2&&(o(13),h("shake-animation",e.state.isShaking),o(4),h("is-invalid",e.state.isShaking),te("ngModel",e.state.resetCode),o(3),l("ngIf",e.errorMessage),o(),l("disabled",e.isLoading),o(),l("ngIf",!e.isLoading),o(),l("ngIf",e.isLoading),o(),l("ngIf",!e.isLoading),o(2),l("routerLink",b(13,Ye)),o(3),l("disabled",e.state.timeLeft>0),o(),V(" ",e.state.timeLeft>0?"Resend code in "+e.state.timeLeft+"s":"Resend code"," "))},dependencies:[P,x,I,F,M,T,de,le,se],styles:[".code-input[_ngcontent-%COMP%]{width:100%;padding:1rem;font-size:1.125rem;border:2px solid #e2e8f0;border-radius:12px;text-align:center;letter-spacing:4px;font-weight:600;color:#2d3748;transition:all .3s cubic-bezier(.4,0,.2,1);background:#fffc}.code-hint[_ngcontent-%COMP%]{font-size:.875rem;color:#718096;text-align:center;margin-top:.5rem;opacity:0;animation:fadeIn .4s .2s cubic-bezier(.4,0,.2,1) forwards}.verify-btn[_ngcontent-%COMP%]:hover:before{width:300%;height:300%}.verify-btn[_ngcontent-%COMP%]:hover{background:#09c;transform:translateY(-2px)}.verify-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.verify-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translate(4px)}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:1.5rem;animation:fadeIn .8s .4s cubic-bezier(.4,0,.2,1) forwards}.back-link[_ngcontent-%COMP%]{color:#718096;text-decoration:none;font-size:.875rem;display:flex;align-items:center;transition:all .3s cubic-bezier(.4,0,.2,1);padding:.5rem 1rem;border-radius:8px}.back-link[_ngcontent-%COMP%]:hover{color:var(--main-color);transform:translate(-5px);background:#00b4e80d}.back-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.back-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translate(-4px)}.resend-btn[_ngcontent-%COMP%]{background:none;border:none;color:var(--main-color);font-size:.875rem;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);padding:.5rem 1rem;border-radius:8px;position:relative}.resend-btn[_ngcontent-%COMP%]:not(:disabled):hover{background:#00b4e80d;transform:translateY(-2px)}.resend-btn[_ngcontent-%COMP%]:disabled{color:#a0aec0;cursor:not-allowed}@media (max-width: 576px){.actions[_ngcontent-%COMP%]{flex-direction:column;gap:1rem;align-items:stretch;text-align:center}.back-link[_ngcontent-%COMP%]{justify-content:center;margin-bottom:.5rem}.code-input[_ngcontent-%COMP%]{letter-spacing:3px}}@media (max-width: 320px){.verify-email[_ngcontent-%COMP%]{padding:.5rem}.card-content[_ngcontent-%COMP%]{padding:0 1rem 1rem}.title[_ngcontent-%COMP%]{font-size:1.125rem}.code-input[_ngcontent-%COMP%]{letter-spacing:2px}}@media (max-height: 600px) and (orientation: landscape){.verify-email[_ngcontent-%COMP%]{padding:1rem;min-height:auto}.email-icon[_ngcontent-%COMP%]{padding:1.5rem 0}.icon-circle[_ngcontent-%COMP%]{width:60px;height:60px}.card-content[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem}}"]})}}return t})();var Xe=()=>["/auth/login"];function et(t,d){if(t&1&&(n(0,"div",24),s(1),i()),t&2){let r=v();o(),S(r.errorMessage)}}function tt(t,d){if(t&1&&(n(0,"div",25),s(1),i()),t&2){let r=v();o(),V(" ",r.getErrorMessage("password")," ")}}function it(t,d){if(t&1&&(n(0,"div",25),s(1),i()),t&2){let r=v();o(),V(" ",r.getErrorMessage("confirmPassword")," ")}}function nt(t,d){t&1&&(n(0,"span"),s(1,"Reset Password"),i())}function rt(t,d){t&1&&(n(0,"span"),c(1,"i",26),s(2," Resetting... "),i())}var ve=(()=>{class t{constructor(r,a,e,m){this._FormBuilder=r,this._AuthService=a,this._Router=e,this._ToastrService=m,this.isLoading=!1,this.errorMessage="",this.email="",this.passwordForm=this._FormBuilder.group({password:["",[u.required,u.minLength(8),u.pattern(/^[A-Z][a-z0-9]{7,15}$/)]],confirmPassword:["",[u.required]]},{validators:this.passwordMatchValidator})}ngOnInit(){this._AuthService.currentEmail.subscribe({next:r=>{if(!r){this._Router.navigate(["/auth/forgot-pass"]);return}this.email=r},error:()=>{this._Router.navigate(["/auth/forgot-pass"])}})}passwordMatchValidator(r){let a=r.get("password")?.value,e=r.get("confirmPassword")?.value;return e?a===e?null:{mismatch:!0}:null}onSubmit(){if(this.passwordForm.invalid||this.passwordForm.hasError("mismatch")){Object.keys(this.passwordForm.controls).forEach(r=>{let a=this.passwordForm.get(r);a?.invalid&&a.markAsTouched()});return}this.isLoading=!0,this.errorMessage="",this._AuthService.resetPassword(this.email,this.passwordForm.get("password")?.value).pipe(B(()=>this.isLoading=!1)).subscribe({next:r=>{r.token&&(localStorage.setItem("userToken",r.token),this._ToastrService.success("Password has been reset successfully."),this._Router.navigate(["/auth/login"]))},error:r=>{this.errorMessage=r.error?.message||"Failed to reset password. Please try again.",this._ToastrService.error(this.errorMessage)}})}getErrorMessage(r){let a=this.passwordForm.get(r);if(a?.errors){if(a.errors.required)return`${r==="password"?"Password":"Confirm password"} is required.`;if(a.errors.minlength)return"Password must be at least 8 characters long.";if(a.errors.pattern)return"Password must start with an uppercase letter and include 8-16 alphanumeric characters."}return this.passwordForm.hasError("mismatch")&&r==="confirmPassword"?"Passwords do not match.":""}static{this.\u0275fac=function(a){return new(a||t)(f(U),f(k),f(E),f(L))}}static{this.\u0275cmp=y({type:t,selectors:[["app-new-pass"]],decls:32,vars:13,consts:[[1,"new-password"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"password-card"],[1,"key-icon"],[1,"icon-circle"],[1,"fas","fa-key"],[1,"card-content"],[1,"title"],[1,"subtitle"],["class","alert alert-danger",4,"ngIf"],[1,"password-form",3,"ngSubmit","formGroup"],[1,"password-input-group"],["for","password",1,"input-label"],["type","password","id","password","formControlName","password","placeholder","Enter new password",1,"password-input"],["class","input-hint error",4,"ngIf"],["for","confirmPassword",1,"input-label"],["type","password","id","confirmPassword","formControlName","confirmPassword","placeholder","Confirm new password",1,"password-input"],["type","submit",1,"reset-btn",3,"disabled"],[4,"ngIf"],[1,"actions"],[1,"back-link",3,"routerLink"],[1,"fas","fa-chevron-left","me-2"],[1,"alert","alert-danger"],[1,"input-hint","error"],[1,"fas","fa-spinner","fa-spin","me-2"]],template:function(a,e){if(a&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),c(7,"i",7),i()(),n(8,"div",8)(9,"h2",9),s(10,"Create New Password"),i(),n(11,"p",10),s(12,"This password should be different from the previous password."),i(),p(13,et,2,1,"div",11),n(14,"form",12),C("ngSubmit",function(){return e.onSubmit()}),n(15,"div",13)(16,"label",14),s(17,"New Password"),i(),c(18,"input",15),p(19,tt,2,1,"div",16),i(),n(20,"div",13)(21,"label",17),s(22,"Confirm Password"),i(),c(23,"input",18),p(24,it,2,1,"div",16),i(),n(25,"button",19),p(26,nt,2,0,"span",20)(27,rt,3,0,"span",20),i()(),n(28,"div",21)(29,"a",22),c(30,"i",23),s(31," Back to login "),i()()()()()()()()),a&2){let m,g,_,w,R;o(13),l("ngIf",e.errorMessage),o(),l("formGroup",e.passwordForm),o(4),h("is-invalid",((m=e.passwordForm.get("password"))==null?null:m.invalid)&&((m=e.passwordForm.get("password"))==null?null:m.touched)),o(),l("ngIf",((g=e.passwordForm.get("password"))==null?null:g.invalid)&&((g=e.passwordForm.get("password"))==null?null:g.touched)),o(4),h("is-invalid",((_=e.passwordForm.get("confirmPassword"))==null?null:_.invalid)&&((_=e.passwordForm.get("confirmPassword"))==null?null:_.touched)||e.passwordForm.hasError("mismatch")),o(),l("ngIf",((w=e.passwordForm.get("confirmPassword"))==null?null:w.invalid)&&((w=e.passwordForm.get("confirmPassword"))==null?null:w.touched)||e.passwordForm.hasError("mismatch")),o(),l("disabled",e.passwordForm.invalid||e.isLoading||e.passwordForm.hasError("mismatch")||!((R=e.passwordForm.get("confirmPassword"))!=null&&R.value)),o(),l("ngIf",!e.isLoading),o(),l("ngIf",e.isLoading),o(2),l("routerLink",b(12,Xe))}},dependencies:[P,x,I,F,M,T,O,N],styles:[".input-hint.error[_ngcontent-%COMP%]{color:#fc8181}.actions[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1.5rem;animation:fadeIn .8s .4s cubic-bezier(.4,0,.2,1) forwards}.back-link[_ngcontent-%COMP%]{color:#718096;text-decoration:none;font-size:.875rem;display:flex;align-items:center;transition:all .3s cubic-bezier(.4,0,.2,1);padding:.5rem 1rem;border-radius:8px}.back-link[_ngcontent-%COMP%]:hover{color:var(--main-color);transform:translate(-5px);background:#00b4e80d}.back-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.back-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translate(-4px)}@media (max-width: 320px){.new-password[_ngcontent-%COMP%]{padding:.5rem}.card-content[_ngcontent-%COMP%]{padding:0 1rem 1rem}.title[_ngcontent-%COMP%]{font-size:1.125rem}}@media (max-height: 600px) and (orientation: landscape){.new-password[_ngcontent-%COMP%]{padding:1rem;min-height:auto}.key-icon[_ngcontent-%COMP%]{padding:1.5rem 0}.icon-circle[_ngcontent-%COMP%]{width:60px;height:60px}.card-content[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem}}"]})}}return t})();var ot=[{path:"",redirectTo:"register",pathMatch:"full"},{path:"register",component:ge},{path:"login",component:ue},{path:"forgot-pass",component:fe},{path:"verify-email",component:he},{path:"new-pass",component:ve},{path:"**",component:ae}],_e=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=H({type:t})}static{this.\u0275inj=W({imports:[X.forChild(ot),X]})}}return t})();var zt=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=H({type:t})}static{this.\u0275inj=W({imports:[re,_e,ce,pe,oe]})}}return t})();export{zt as AuthModule};
