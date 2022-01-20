import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/core/services/album.service';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
    public albums: any;
    constructor(private albumService: AlbumService) {}

    ngOnInit(): void {
        this.getUserSavedAlbums();
    }

    getUserSavedAlbums() {
        this.albumService.getUserSavedAlbums().subscribe((res) => {
            this.albums = res;
        });
    }
}
