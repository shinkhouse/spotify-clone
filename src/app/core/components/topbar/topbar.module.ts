import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { ProfileMenuModule } from '../profile-menu/profile-menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    ProfileMenuModule,
    FlexLayoutModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
