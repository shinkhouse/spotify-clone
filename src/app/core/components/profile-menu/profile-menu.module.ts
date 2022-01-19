import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ProfileMenuComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ProfileMenuComponent
  ]
})
export class ProfileMenuModule { }
