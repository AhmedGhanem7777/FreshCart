import{B as l,E as i,bb as d,nb as u,qb as a,rb as s,y as r}from"./chunk-QPUKSS23.js";var n=(t,c)=>{let o=l(u);return typeof window<"u"&&typeof localStorage<"u"?localStorage.getItem("userToken")?!0:(o.navigate(["/auth/login"]),!1):(o.navigate(["/auth/login"]),!1)};var m=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-KJ5HYWBP.js").then(t=>t.HomeModule)},{path:"products",loadChildren:()=>import("./chunk-2ZZSPGEM.js").then(t=>t.ProductsModule)},{path:"brands",loadChildren:()=>import("./chunk-FGSYFCAG.js").then(t=>t.BrandsModule)},{path:"categories",loadChildren:()=>import("./chunk-PYIKJM6V.js").then(t=>t.CategoriesModule)},{path:"allorders",loadChildren:()=>import("./chunk-DBKMMFRH.js").then(t=>t.OrdersModule),canActivate:[n]},{path:"cart",loadChildren:()=>import("./chunk-M74YKKKX.js").then(t=>t.CartModule),canActivate:[n]},{path:"wishlist",loadChildren:()=>import("./chunk-BMRHGDI5.js").then(t=>t.WishlistModule),canActivate:[n]},{path:"profile",loadChildren:()=>import("./chunk-AMLWHK4O.js").then(t=>t.ProfileModule)},{path:"**",component:s}],h=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=i({type:t})}static{this.\u0275inj=r({imports:[a.forChild(m),a]})}}return t})();var P=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=i({type:t})}static{this.\u0275inj=r({imports:[d,h]})}}return t})();export{P as PublicModule};
