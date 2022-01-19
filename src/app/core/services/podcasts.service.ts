import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spotify } from 'src/environments/environment';
import { SpotifyApiParams } from '../models/spotify-api-params.model';

@Injectable({
    providedIn: 'root',
})
export class PodcastsService {
    constructor(private http: HttpClient) {}

    getMyPersonalShows(
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http.get<SpotifyApi.UsersSavedShowsResponse>(`${spotify.baseAPIUrl}/me/shows`, {
            params,
        });
    }
}
