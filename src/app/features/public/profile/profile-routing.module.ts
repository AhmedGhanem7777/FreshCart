import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile-setting', pathMatch: 'full' },
  { path: 'profile-setting', component: ProfileSettingComponent, children: 
    [
      { path: '', redirectTo: 'personal-details', pathMatch: 'full' },
      { path: 'personal-details', component: PersonalDetailsComponent },
      { path: 'change-pass', component: ChangePassComponent },
      { path: 'add-address', component: AddAddressComponent },
      { path: '**', component: NotFoundComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
