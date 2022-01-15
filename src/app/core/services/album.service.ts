import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, spotify } from 'src/environments/environment';
import { SpotifyApiParams } from '../models/spotify-api-params.model';

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    constructor(private http: HttpClient) {}

    getUserSavedAlbums(
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http.get<SpotifyApi.UsersSavedAlbumsResponse>(`${spotify.baseAPIUrl}/me/albums`, {
            params,
        });
    }

    getAlbum(albumId: string) {
        return this.http.get<SpotifyApi.AlbumObjectFull>(`${spotify.baseAPIUrl}/albums/${albumId}`);
    }

    getTracks(
        albumId: string,
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http.get<SpotifyApi.AlbumTracksResponse>(`${spotify.baseAPIUrl}/albums/${albumId}/tracks`, {
            params,
        });
    }
}
