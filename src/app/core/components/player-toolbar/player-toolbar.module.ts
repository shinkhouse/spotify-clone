import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerToolbarComponent } from './player-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PlayerToolbarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    PlayerToolbarComponent
  ]
})
export class PlayerToolbarModule { }
