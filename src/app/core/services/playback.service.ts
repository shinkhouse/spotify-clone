import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { tap, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthStore } from '../stores/auth.store';
import { PlayerService } from './player.service';
import { PlaybackStore } from '../stores/playback.store';

@Injectable({ providedIn: 'root' })
export class PlaybackService {
    constructor(
        private authStore: AuthStore,
        private playbackStore: PlaybackStore,
        private playerApi: PlayerService,
        private titleService: Title
    ) {}

    init() {
        this.authStore.token$
            .pipe(
                tap((token) => {
                    this.initPlaybackSDK(token, 0.50);
                })
            )
            .subscribe();
    }

    play() {
        this.playbackStore.player()?.togglePlay();
    }

    nextSong() {
        this.playbackStore.player()?.nextTrack();
    }

    previousSong() {
        this.playbackStore.player()?.previousTrack();
    }

    seek(pos_ms: number) {
        this.playbackStore.player()?.seek(pos_ms);
    }

    setVolume(volume: number): Observable<unknown> {
        this.playbackStore.patchState({
            volume,
        });
        return this.playerApi.setVolume(Math.floor(volume * 100));
    }

    private async initPlaybackSDK(token: string, volume: number) {
        const { Player } = await this.waitForSpotifyWebPlaybackSDKToLoad();
        const player = new Player({
            name: 'Spotify Clone Web Player',
            getOAuthToken: (cb) => {
                cb(token);
            },
            volume,
        });

        player.addListener('initialization_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('authentication_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('account_error', ({ message }) => {
            alert(`You account has to have Spotify Premium for playing music ${message}`);
        });

        player.addListener('playback_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('player_state_changed', async (state: Spotify.PlaybackState) => {
            if (!state) {
                console.info('[Spotify Clone] No player info!');
                return;
            }
            this.setAppTitle(state);
            this.playbackStore.patchState({
                data: state,
                volume: await player.getVolume(),
            });
            const currentTrackId = state.track_window?.current_track?.id;
            if (!state.paused && currentTrackId) {
                this.playbackStore.loadTracksAnalytics({
                    trackId: currentTrackId,
                });
            }
        });

        player.addListener('ready', ({ device_id }) => {
            console.log('Player is ready');
            console.log('Device ID', device_id);
            this.playbackStore.patchState({
                deviceId: device_id,
            });
            this.playerApi.transferUserPlayback(device_id).subscribe();
        });

        player.addListener('not_ready', ({ device_id }) => {
            console.log('[Spotify Clone] Device ID has gone offline', device_id);
        });

        await player.connect();
        this.playbackStore.patchState({
            player,
        });
    }

    setAppTitle(state: Spotify.PlaybackState) {
        const currentTrack = state.track_window?.current_track;
        if (currentTrack) {
            const artistName = currentTrack.artists[0].name || '';
            this.titleService.setTitle(`Spotify Clone - ${currentTrack.name} ${artistName ? `- ${artistName}` : ''}`);
        }
    }

    private waitForSpotifyWebPlaybackSDKToLoad(): Promise<typeof Spotify> {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        window.onSpotifyWebPlaybackSDKReady = () => {};

        return new Promise((resolve) => {
            if (window.Spotify) {
                resolve(window.Spotify);
            } else {
                window.onSpotifyWebPlaybackSDKReady = () => {
                    resolve(window.Spotify);
                };
            }
        });
    }
}
