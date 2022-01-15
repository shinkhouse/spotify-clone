import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spotify } from 'src/environments/environment';
import { SpotifyApiParams } from '../models/spotify-api-params.model';

@Injectable({
    providedIn: 'root',
})
export class PlaylistService {
    constructor(private http: HttpClient) {}

    getUserSavedPlaylists(
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http.get<SpotifyApi.ListOfCurrentUsersPlaylistsResponse>(`${spotify.baseAPIUrl}/me/playlists`, {
            params,
        });
    }

    getById(playlistId: string) {
        if (!playlistId) {
            throw new Error('Playlist Id is required');
        }
        return this.http.get<SpotifyApi.PlaylistObjectFull>(`${spotify.baseAPIUrl}/playlists/${playlistId}`);
    }

    getTracks(playlistId: string) {
        if (!playlistId) {
            throw new Error('Playlist Id is required');
        }
        return this.http.get<SpotifyApi.PlaylistTrackResponse>(`${spotify.baseAPIUrl}/playlists/${playlistId}/tracks`);
    }
}
