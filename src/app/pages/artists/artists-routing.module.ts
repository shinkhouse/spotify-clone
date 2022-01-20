import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists.component';

const routes: Routes = [
    {
        path: '',
        component: ArtistsComponent,
    },
    {
        path: ':artistId',
        loadChildren: async () => (await import('./pages/artist/artist.module')).ArtistModule,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
