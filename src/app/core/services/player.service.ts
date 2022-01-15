import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spotify } from 'src/environments/environment';
import { SpotifyPlayRequestApi } from '../models/play-request.model';
import { SpotifyApiRecentPlayerTracksResponse } from '../models/user-recent-played-track.model';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    playerUrl: string;
    constructor(private http: HttpClient) {
        this.playerUrl = `${spotify.baseAPIUrl}/me/player`;
    }

    transferUserPlayback(deviceId: string) {
        return this.http.put(this.playerUrl, {
            device_ids: [deviceId],
            play: true,
        });
    }

    play(request: SpotifyPlayRequestApi) {
        return this.http.put(`${this.playerUrl}/play`, request);
    }

    pause() {
        return this.http.put(`${this.playerUrl}/pause`, {});
    }

    togglePlay(isPlaying: boolean, request: SpotifyPlayRequestApi) {
        if (isPlaying) {
            return this.pause();
        }
        return this.play(request);
    }

    next() {
        return this.http.post(`${this.playerUrl}/next`, {});
    }

    prev() {
        return this.http.post(`${this.playerUrl}/previous`, {});
    }

    seek(positionMs: number) {
        return this.http.put(`${this.playerUrl}/seek`, null, {
            params: {
                position_ms: `${positionMs}`,
            },
        });
    }

    setVolume(volume: number) {
        return this.http.put(`${this.playerUrl}/volume`, null, {
            params: {
                volume_percent: `${volume}`,
            },
        });
    }

    getRecentPlayedTracks(params: SpotifyApi.RecentlyPlayedParameterObject = { limit: 50 }) {
        return this.http.get<SpotifyApiRecentPlayerTracksResponse>(`${this.playerUrl}/recently-played`, {
            params: params as any, // eslint-disable-line
        });
    }
}
