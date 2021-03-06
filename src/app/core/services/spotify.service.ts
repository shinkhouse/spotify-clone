import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { spotify } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SpotifyService {
    constructor(private http: HttpClient) {}

    getMe(): Observable<SpotifyApi.CurrentUsersProfileResponse> {
        return this.http.get<SpotifyApi.CurrentUsersProfileResponse>(`${spotify.baseAPIUrl}/me`);
    }

    getTopTracks() {
        return this.http.get<SpotifyApi.UsersTopTracksResponse>(`${spotify.baseAPIUrl}/me/top/tracks`);
    }

    getTopArtists() {
        return this.http.get<SpotifyApi.UsersTopArtistsResponse>(`${spotify.baseAPIUrl}/me/top/artists`);
    }
}
