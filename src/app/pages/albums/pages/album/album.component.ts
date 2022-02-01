import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { startWith } from 'rxjs';
import { AlbumInfo } from 'src/app/core/models/album.model';
import { AlbumService } from 'src/app/core/services/album.service';
import { ColorService } from 'src/app/core/services/color.service';
import { PlaybackStore } from 'src/app/core/stores/playback.store';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
    selector: 'spotify-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
    public albumId: string = '';
    public albumInfo: AlbumInfo;
    public albumTracks: SpotifyApi.AlbumTracksResponse;
    public backgroundColor: string = '#009688';
    isPlaying$ = this.playbackStore.isPlaying$.pipe(startWith(false));

    constructor(
        private route: ActivatedRoute,
        private albumService: AlbumService,
        private colors: ColorService,
        private player: PlayerService,
        private playbackStore: PlaybackStore
    ) {
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

    togglePlay(isPlaying: boolean, uri: string) {
        this.player
            .togglePlay(isPlaying, {
                context_uri: uri,
            })
            .subscribe();
    }
}
