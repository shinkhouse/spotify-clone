import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spotify } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ArtistService {
    constructor(private http: HttpClient) {}

    getArtist(artistId: string) {
        return this.http.get<SpotifyApi.ArtistObjectFull>(`${spotify.baseAPIUrl}/artists/${artistId}`);
    }

    getFollowedArtists() {
        return this.http.get<SpotifyApi.UsersFollowedArtistsResponse>(`${spotify.baseAPIUrl}/me/following?type=artist`);
    }

    getArtistTopTracks(artistId: string, country: string) {
        return this.http.get<SpotifyApi.ArtistsTopTracksResponse>(
            `${spotify.baseAPIUrl}/artists/${artistId}/top-tracks?market=${country}`
        );
    }

    getArtistAlbums(artistId: string) {
        return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(`${spotify.baseAPIUrl}/artists/${artistId}/albums`);
    }
}
