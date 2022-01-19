import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { MusicCardModule } from 'src/app/core/components/music-card/music-card.module';


@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    MusicCardModule
  ]
})
export class PlaylistsModule { }
