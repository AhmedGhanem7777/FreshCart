import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AddAddressComponent } from './add-address/add-address.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { SidebarProfileComponent } from './sidebar-profile/sidebar-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddAddressComponent,
    PersonalDetailsComponent,
    ProfileSettingComponent,
    SidebarProfileComponent,
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
