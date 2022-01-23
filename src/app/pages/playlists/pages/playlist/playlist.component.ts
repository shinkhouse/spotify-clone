import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Params, Router } from '@angular/router';
import { ColorService } from 'src/app/core/services/color.service';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
    selector: 'spotify-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
    public playlistId: string = '';
    public playlistInfo: any = null;
    public playlistTracks: any = null;
    public backgroundColor: string = '#009688';
    public blockId: string | number = '';
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private playlistService: PlaylistService,
        private colors: ColorService
    ) {
        this.route.paramMap.subscribe((res: Params) => {
            this.playlistInfo = null;
            this.playlistTracks = null;
            console.log(res['params'].playlistId);
            this.playlistId = res['params'].playlistId;
            this.getPlaylistById();
            this.getPlaylistTracks();
        });
    }

    ngOnInit(): void {
        
    }

    getPlaylistById() {
        this.playlistService.getById(this.playlistId).subscribe((res) => {
            this.playlistInfo = res;
            this.getAlbumColors(this.playlistInfo.images[0].url);
        });
    }

    getPlaylistTracks() {
        this.playlistService.getTracks(this.playlistId).subscribe((res) => {
            this.playlistTracks = res;
        });
    }

    getAlbumColors(url: string) {
        this.colors.getAlbumColors(url).subscribe((res) => {
            // console.log(url, playlistIndex);
            this.playlistInfo.colors = res;
            this.backgroundColor = res[0];
        });
    }
}
