import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('./pages/home/home.module')).HomeModule,
    },
    {
        path: 'albums',
        loadChildren: async () => (await import('./pages/albums/albums.module')).AlbumsModule,
    },
    {
        path: 'artists',
        loadChildren: async () => (await import('./pages/artists/artists.module')).ArtistsModule,
    },
    {
        path: 'collections',
        loadChildren: async () => (await import('./pages/collections/collections.module')).CollectionsModule,
    },
    {
        path: 'playlists',
        loadChildren: async () => (await import('./pages/playlists/playlists.module')).PlaylistsModule,
    },
    {
        path: 'user',
        loadChildren: async () => (await import('./pages/user/user.module')).UserModule,
    },
    {
        path: 'search',
        loadChildren: async () => (await import('./pages/search/search.module')).SearchModule,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
