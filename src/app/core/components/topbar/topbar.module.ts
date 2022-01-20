import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { ProfileMenuModule } from '../profile-menu/profile-menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    ProfileMenuModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
