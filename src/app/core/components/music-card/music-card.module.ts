import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicCardComponent } from './music-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MusicCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    MusicCardComponent
  ]
})
export class MusicCardModule { }
