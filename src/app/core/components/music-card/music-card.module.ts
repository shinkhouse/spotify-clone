import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicCardComponent } from './music-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PlayButtonModule } from '../play-button/play-button.module';



@NgModule({
  declarations: [
    MusicCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    PlayButtonModule
  ],
  exports: [
    MusicCardComponent
  ]
})
export class MusicCardModule { }
