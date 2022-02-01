import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { TopbarModule } from 'src/app/core/components/topbar/topbar.module';
import { DurationPipeModule } from 'src/app/core/pipes/duration/duration-pipe.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlayButtonModule } from 'src/app/core/components/play-button/play-button.module';


@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    TopbarModule,
    DurationPipeModule,
    FlexLayoutModule,
    PlayButtonModule
  ]
})
export class AlbumModule { }
