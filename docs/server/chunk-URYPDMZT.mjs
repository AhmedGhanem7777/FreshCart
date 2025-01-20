import './polyfills.server.mjs';
import{a as x,b as M,c as R}from"./chunk-GMDH3N2M.mjs";import{a as v}from"./chunk-UGYBUXGN.mjs";import{c as z,d as N,j as V}from"./chunk-OHTEK3PP.mjs";import"./chunk-PP6G6M32.mjs";import"./chunk-3T2UL7EU.mjs";import"./chunk-AZEHDMCX.mjs";import{a as I}from"./chunk-ZYZHR6RT.mjs";import"./chunk-J4BDXTMW.mjs";import{$ as a,B as d,C,Da as l,Ea as j,H as O,I as y,Mb as L,Na as F,Ob as f,Y as w,aa as h,ja as p,la as c,ma as S,mb as _,nb as D,qa as n,ra as i,rb as E,sa as r,ta as b,ua as H,v as u,va as T,xa as k,ya as g}from"./chunk-ZYZ23JN3.mjs";import"./chunk-VVCT4QZE.mjs";var X=t=>["/public/categories/category-details",t];function q(t,s){if(t&1&&(n(0,"a",4),r(1,"img",5),n(2,"h5",6),l(3),i()()),t&2){let e=g().$implicit;c("routerLink",F(4,X,e._id)),a(),c("src",e.image,w)("alt",e.name),a(2),j(e.name)}}function B(t,s){t&1&&(b(0),p(1,q,4,6,"ng-template",3),H())}var U=(()=>{class t{constructor(e){this._ProductService=e,this.categories=[],this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},600:{items:3},1e3:{items:6}},nav:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0}}ngOnInit(){this.getSliderCategories()}getSliderCategories(){this._ProductService.getCategories().subscribe({next:e=>{this.categories=e.data}})}static{this.\u0275fac=function(o){return new(o||t)(h(v))}}static{this.\u0275cmp=d({type:t,selectors:[["app-category-slider"]],decls:3,vars:2,consts:[[1,"category-slider"],[3,"options"],[4,"ngFor","ngForOf"],["carouselSlide",""],[3,"routerLink"],[1,"cursor-pointer",3,"src","alt"],[1,"text-center","p-2","font-silder-category"]],template:function(o,m){o&1&&(n(0,"div",0)(1,"owl-carousel-o",1),p(2,B,2,0,"ng-container",2),i()()),o&2&&(a(),c("options",m.customOptions),a(),c("ngForOf",m.categories))},dependencies:[_,L,M,x],styles:[".category-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:300px}@media (max-width: 768px){.category-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;object-fit:cover}}.category-slider[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#0c4368;background-color:#f0f3f2}@media (max-width: 768px){.category-slider[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:.9rem;padding:.5rem!important}}"]})}}return t})();function K(t,s){if(t&1){let e=T();n(0,"div",10),r(1,"img",11),n(2,"div",12)(3,"div",13)(4,"span",14),r(5,"i",15),l(6,"Fresh Cart"),i()(),n(7,"div",16)(8,"p",17),l(9,"Whether you're looking for the freshest produce, pantry staples, or specialty items, FreshCart brings the supermarket to you, redefining the way you shop for groceries."),i()(),n(10,"a",18),k("click",function(){O(e);let m=g();return y(m.scrollToProducts())}),l(11,"Get Started"),i()()()}}function Q(t,s){t&1&&r(0,"img",19)}function tt(t,s){t&1&&r(0,"img",20)}var W=(()=>{class t{constructor(){this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:700,navText:['<span class="nav-btns nav-prev"><i class="fa fa-chevron-left"></i></span>','<span class="nav-btns nav-next"><i class="fa fa-chevron-right"></i></span>'],responsive:{0:{items:1}},nav:!0}}scrollToProducts(){let e=window.innerWidth<=768?800:1250;window.scrollTo({top:e,behavior:"smooth"})}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=d({type:t,selectors:[["app-home-slider"]],decls:12,vars:1,consts:[[1,"home-slider"],[1,"row","gx-0"],[1,"col-md-9"],[1,"slider"],[1,"position-relative",3,"options"],["carouselSlide",""],[1,"col-md-3"],[1,"static-images"],["src","../../../../../assets/images/product5-DZxbnV6L.jpg","alt","product-four",1,"w-100"],["src","../../../../../assets/images/product4-CxeAzYXu.jpg","alt","product-five",1,"w-100"],[1,"home-slide","position-relative"],["src","../../../../../assets/images/product1-DjSvcSzR.jpg","alt","product-one"],[1,"slider-info"],[1,"logo"],[1,"px-3","py-2","rounded-5","font-super-bold","font-xl"],[1,"fa-brands","fa-opencart","text-primary","me-3"],[1,"info"],[1,"my-4","w-75","p-3","rounded-2","font-sm","font-bold"],[1,"slider-btn","px-3","py-2","rounded-5","cursor-pointer",3,"click"],["src","../../../../../assets/images/product2-Cc8hawmZ.jpg","alt","product-two"],["src","../../../../../assets/images/product3-CjkhanyU.jpg","alt","product-three"]],template:function(o,m){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"owl-carousel-o",4),p(5,K,12,0,"ng-template",5)(6,Q,1,0,"ng-template",5)(7,tt,1,0,"ng-template",5),i()()(),n(8,"div",6)(9,"div",7),r(10,"img",8)(11,"img",9),i()()()()),o&2&&(a(4),c("options",m.customOptions))},dependencies:[M,x],styles:[".home-slider[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{height:730px}@media (max-width: 768px){.home-slider[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{height:400px}}.home-slider[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:700px}@media (max-width: 768px){.home-slider[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:400px;object-fit:cover}}.slider-info[_ngcontent-%COMP%]{position:absolute;top:25px;left:20px}@media (max-width: 768px){.slider-info[_ngcontent-%COMP%]{top:15px;left:10px}}.slider-info[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#fff}@media (max-width: 768px){.slider-info[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;padding:.5rem!important}}.slider-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;background-color:#fff3;box-shadow:var(--shadow-slider)}@media (max-width: 768px){.slider-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;width:90%!important;margin:.5rem 0!important}}.slider-info[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%]{background-color:var(--main-color);color:#fff;transition:all .4s}@media (max-width: 768px){.slider-info[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%]{font-size:.9rem;padding:.4rem 1rem!important}}.slider-info[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%]:hover{background-color:var(--main-color-hover)}.home-slider[_ngcontent-%COMP%]   .static-images[_ngcontent-%COMP%]{height:700px}@media (max-width: 768px){.home-slider[_ngcontent-%COMP%]   .static-images[_ngcontent-%COMP%]{height:auto;display:flex;flex-direction:column;gap:10px;margin-top:10px}}.home-slider[_ngcontent-%COMP%]   .static-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:350px}@media (max-width: 768px){.home-slider[_ngcontent-%COMP%]   .static-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;object-fit:cover}}.owl-nav[_ngcontent-%COMP%]{position:absolute;top:50%;width:100%;display:flex;justify-content:space-between;transform:translateY(-50%);pointer-events:none}@media (max-width: 768px){.owl-nav[_ngcontent-%COMP%]{display:none}}.owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;padding:10px;border-radius:50%;cursor:pointer;transition:background-color .3s;pointer-events:all}.owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]:hover, .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]:hover{background-color:#000c}.owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]{position:absolute;left:10px}.owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]{position:absolute;right:10px}"]})}}return t})();function ot(t,s){t&1&&(n(0,"div",3),r(1,"app-loading"),i())}function nt(t,s){if(t&1&&(n(0,"div",12),r(1,"app-product-card",13),i()),t&2){let e=s.$implicit,o=s.index;a(),S("animation-delay",o*100+"ms"),c("product",e)}}function it(t,s){if(t&1&&(n(0,"div",4)(1,"div",5),r(2,"app-home-slider"),n(3,"div",6)(4,"h2",7),l(5,"Shop now by popular categories"),i(),r(6,"app-category-slider"),i(),n(7,"div",8)(8,"h2",9),l(9,"Shop now by popular products"),i(),n(10,"div",10),p(11,nt,2,3,"div",11),i()()()()),t&2){let e=g();a(11),c("ngForOf",e.allProducts)}}var Y=(()=>{class t{constructor(e){this._ProductService=e,this.allProducts=[],this.isLoading=!0}ngOnInit(){this.getLimitProducts()}getLimitProducts(){this._ProductService.getLimitProducts().subscribe({next:e=>{this.allProducts=e.data,this.isLoading=!1},error:e=>{this.isLoading=!1}})}static{this.\u0275fac=function(o){return new(o||t)(h(v))}}static{this.\u0275cmp=d({type:t,selectors:[["app-home"]],decls:3,vars:2,consts:[[1,"home-section","my-5","py-5"],["class","col-12 text-center py-5",4,"ngIf"],["class","container mt-4",4,"ngIf"],[1,"col-12","text-center","py-5"],[1,"container","mt-4"],[1,"row"],[1,"col-12","mt-5"],[1,"font-lg","font-bold","second-color","text-center","mb-4","fade-in"],[1,"col-12"],[1,"products-title","mt-5","mb-4","font-bold","font-xl","second-color","fade-in"],[1,"row","g-4","mt-5"],["class","col-12 col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","col-lg-3"],[1,"product-card",3,"product"]],template:function(o,m){o&1&&(n(0,"section",0),p(1,ot,2,0,"div",1)(2,it,12,1,"div",2),i()),o&2&&(a(),c("ngIf",m.isLoading),a(),c("ngIf",!m.isLoading))},dependencies:[_,D,z,N,U,W],styles:['.home-section[_ngcontent-%COMP%]   .products-title[_ngcontent-%COMP%]{text-align:center;position:relative;margin-bottom:3rem}.home-section[_ngcontent-%COMP%]   .products-title[_ngcontent-%COMP%]:after{content:"";width:200px;height:3px;border-radius:5px;background-color:var(--main-color);position:absolute;bottom:-1rem;left:50%;transform:translate(-50%)}@media (max-width: 768px){.home-section[_ngcontent-%COMP%]   .products-title[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem;padding:0 1rem}.home-section[_ngcontent-%COMP%]   .products-title[_ngcontent-%COMP%]:after{width:150px}}@media (max-width: 768px){.home-section[_ngcontent-%COMP%]{margin:2rem 0!important;padding:1rem 0!important}}.main-color[_ngcontent-%COMP%]{color:var(--main-color)}.second-color[_ngcontent-%COMP%]{color:var(--second-color)}']})}}return t})();var rt=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Y},{path:"**",component:I}],Z=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=u({imports:[f.forChild(rt),f]})}}return t})();var wt=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=u({imports:[E,Z,f,R,V]})}}return t})();export{wt as HomeModule};
