import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'public',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./features/auth/auth.module').then((m)=>m.AuthModule)},
  {path:'public',loadChildren:()=>import('./features/public/public.module').then((m)=>m.PublicModule)},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
