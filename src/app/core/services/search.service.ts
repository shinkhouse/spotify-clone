import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { spotify } from 'src/environments/environment';
import { SpotifyApiParams } from '../models/spotify-api-params.model';

export type SearchResponse = Pick<SpotifyApi.SearchResponse, 'tracks' | 'artists' | 'albums' | 'playlists'>;

@Injectable({ providedIn: 'root' })
export class SearchApiService {
    constructor(private http: HttpClient) {}

    /**
     * Search for tracks, artists, albums, and playlists
     *
     * @param {string} term
     * @param {SpotifyApiParams} [apiParams={ limit: 50 }]
     * @return {*}  {(Observable<SearchResponse>)}
     */
    search(term: string, apiParams: SpotifyApiParams = { limit: 50 }): Observable<SearchResponse> {
        const params = new HttpParams({ fromObject: apiParams }).set('q', term).set('type', 'track,artist,album,playlist,show,episode');

        return this.http.get<SpotifyApi.SearchResponse>(`${spotify.baseAPIUrl}/search`, { params });
    }
}
