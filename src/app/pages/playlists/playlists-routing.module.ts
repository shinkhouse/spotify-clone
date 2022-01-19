import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';

const routes: Routes = [
    {
        path: '',
        component: PlaylistsComponent,
    },
    {
        path: ':playlistId',
        loadChildren: async () => (await import('./pages/playlist/playlist.module')).PlaylistModule,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }