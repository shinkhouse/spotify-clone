import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { TopbarModule } from 'src/app/core/components/topbar/topbar.module';
import { MusicCardModule } from 'src/app/core/components/music-card/music-card.module';


@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    TopbarModule,
    MusicCardModule
  ]
})
export class ArtistsModule { }
