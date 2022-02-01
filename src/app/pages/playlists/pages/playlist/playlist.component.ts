import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Params, Router } from '@angular/router';
import { startWith } from 'rxjs';
import { ColorService } from 'src/app/core/services/color.service';
import { PlaybackService } from 'src/app/core/services/playback.service';
import { PlaybackStore } from 'src/app/core/stores/playback.store';
import { PlayerService } from 'src/app/core/services/player.service';
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
    isPlaying$ = this.playbackStore.isPlaying$.pipe(startWith(false));
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private playlistService: PlaylistService,
        private colors: ColorService,
        private player: PlayerService,
        private playbackStore: PlaybackStore
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

    ngOnInit(): void {}

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

    togglePlayTrack(isPlaying: boolean, trackUri: string) {
        this.player
            .togglePlay(isPlaying, {
                uris: [trackUri],
            })
            .subscribe();
    }

    togglePlay(isPlaying: boolean, uri: string) {
        this.player
            .togglePlay(isPlaying, {
                context_uri: uri,
            })
            .subscribe();
    }
}
