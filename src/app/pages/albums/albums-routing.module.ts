import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';

const routes: Routes = [
    {
        path: '',
        component: AlbumsComponent,
    },
    {
        path: ':albumId',
        loadChildren: async () => (await import('./pages/album/album.module')).AlbumModule,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
