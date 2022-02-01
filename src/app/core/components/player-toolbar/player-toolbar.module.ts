import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerToolbarComponent } from './player-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { PlayButtonModule } from '../play-button/play-button.module';
import { DurationPipeModule } from '../../pipes/duration/duration-pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlayerToolbarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    PlayButtonModule,
    DurationPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PlayerToolbarComponent
  ]
})
export class PlayerToolbarModule { }
