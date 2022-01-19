import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './podcasts.component';
import { TopbarModule } from 'src/app/core/components/topbar/topbar.module';
import { MusicCardModule } from 'src/app/core/components/music-card/music-card.module';


@NgModule({
  declarations: [
    PodcastsComponent
  ],
  imports: [
    CommonModule,
    PodcastsRoutingModule,
    TopbarModule,
    MusicCardModule
  ]
})
export class PodcastsModule { }
