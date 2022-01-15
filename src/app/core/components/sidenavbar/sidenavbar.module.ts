import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from './sidenavbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavbarComponent
  ]
})
export class SidenavbarModule { }
