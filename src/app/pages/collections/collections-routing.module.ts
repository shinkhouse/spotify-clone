import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from '../albums/albums.component';
import { ArtistsComponent } from '../artists/artists.component';
import { PlaylistsComponent } from '../playlists/playlists.component';
import { PodcastsComponent } from '../podcasts/podcasts.component';
import { CollectionsComponent } from './collections.component';

const routes: Routes = [
    {
        path: 'playlists',
        component: PlaylistsComponent,
    },
    {
        path: 'podcasts',
        component: PodcastsComponent,
    },
    {
        path: 'artists',
        component: ArtistsComponent,
    },
    {
        path: 'albums',
        component: AlbumsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CollectionsRoutingModule {}
