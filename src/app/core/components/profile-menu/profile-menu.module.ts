import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProfileMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    ProfileMenuComponent
  ]
})
export class ProfileMenuModule { }
