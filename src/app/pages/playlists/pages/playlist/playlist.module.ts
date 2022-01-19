import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopbarModule } from 'src/app/core/components/topbar/topbar.module';
import { DurationPipeModule } from 'src/app/core/pipes/duration/duration-pipe.module';


@NgModule({
  declarations: [
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    FlexLayoutModule,
    TopbarModule,
    DurationPipeModule
  ]
})
export class PlaylistModule { }
