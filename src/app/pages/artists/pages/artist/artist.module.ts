import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { DurationPipeModule } from 'src/app/core/pipes/duration/duration-pipe.module';
import { TopbarModule } from 'src/app/core/components/topbar/topbar.module';
import { MusicCardModule } from 'src/app/core/components/music-card/music-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    DurationPipeModule,
    TopbarModule,
    MusicCardModule,
    FlexLayoutModule
  ]
})
export class ArtistModule { }
