import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spotify } from 'src/environments/environment';
import { SpotifyApiAudioAnalysisResponse } from '../models/audio-analysis-response.model';
import { SpotifyApiParams } from '../models/spotify-api-params.model';

@Injectable({
    providedIn: 'root',
})
export class TrackService {
    constructor(private http: HttpClient) {}

    getAudioAnalysis(trackId: string) {
        return this.http.get<SpotifyApiAudioAnalysisResponse>(`${spotify.baseAPIUrl}/audio-analysis/${trackId}`);
    }

    getAudioFeatures(trackId: string) {
        return this.http.get<SpotifyApi.AudioAnalysisResponse>(`${spotify.baseAPIUrl}/audio-features/${trackId}`);
    }

    getUserSavedTracks(
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http.get<SpotifyApi.UsersSavedTracksResponse>(`${spotify.baseAPIUrl}/me/tracks`, {
            params,
        });
    }
}
