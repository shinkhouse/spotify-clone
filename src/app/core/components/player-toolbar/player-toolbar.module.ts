import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerToolbarComponent } from './player-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    PlayerToolbarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule
  ],
  exports: [
    PlayerToolbarComponent
  ]
})
export class PlayerToolbarModule { }
