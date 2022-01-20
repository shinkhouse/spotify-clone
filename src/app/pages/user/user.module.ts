import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TopbarModule } from 'src/app/core/components/topbar/topbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MusicCardModule } from 'src/app/core/components/music-card/music-card.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TopbarModule,
    FlexLayoutModule,
    MusicCardModule
  ]
})
export class UserModule { }
