import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlbumService } from 'src/app/core/services/album.service';
import { ColorService } from 'src/app/core/services/color.service';

@Component({
    selector: 'spotify-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
    public albumId: string = '';
    public albumInfo: any;
    public albumTracks: any;
    public backgroundColor: string = '#009688';
    constructor(private route: ActivatedRoute, private albumService: AlbumService, private colors: ColorService) {
        this.route.paramMap.subscribe((res: Params) => {
            this.albumInfo = null;
            this.albumTracks = null;
            console.log(res['params'].albumId);
            this.albumId = res['params'].albumId;
            this.getAlbumById();
            this.getAlbumTracks();
        });
    }

    ngOnInit(): void {}

    getAlbumById() {
        this.albumService.getAlbum(this.albumId).subscribe((res) => {
            this.albumInfo = res;
            this.getAlbumColors(this.albumInfo.images[0].url);
        });
    }

    getAlbumTracks() {
        this.albumService.getTracks(this.albumId).subscribe((res) => {
            this.albumTracks = res;
        });
    }

    getAlbumColors(url: string) {
        this.colors.getAlbumColors(url).subscribe((res) => {
            // console.log(url, playlistIndex);
            this.albumInfo.colors = res;
            this.backgroundColor = res[0];
        });
    }
}
