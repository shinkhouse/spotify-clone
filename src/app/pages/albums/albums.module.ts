import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { TopbarModule } from 'src/app/core/components/topbar/topbar.module';
import { MusicCardModule } from 'src/app/core/components/music-card/music-card.module';


@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    TopbarModule,
    MusicCardModule
  ]
})
export class AlbumsModule { }
