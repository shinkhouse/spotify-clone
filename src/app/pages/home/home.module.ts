import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopbarModule } from 'src/app/core/components/topbar/topbar.module';
import { MusicCardModule } from 'src/app/core/components/music-card/music-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TopbarModule,
    MusicCardModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
