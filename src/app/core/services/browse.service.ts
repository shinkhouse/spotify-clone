import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { spotify } from 'src/environments/environment';
import { SpotifyApiParams } from '../models/spotify-api-params.model';

@Injectable({
    providedIn: 'root',
})
export class BrowseService {
    browseUrl: string;
    constructor(private http: HttpClient) {
        this.browseUrl = `${spotify.baseAPIUrl}/browse`;
    }

    getAllFeaturedPlaylists(
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http.get<SpotifyApi.ListOfFeaturedPlaylistsResponse>(`${this.browseUrl}/featured-playlists`, {
            params,
        });
    }

    getAllCategories(
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http
            .get<SpotifyApi.MultipleCategoriesResponse>(`${this.browseUrl}/categories`, {
                params,
            })
            .pipe(map((res) => res.categories));
    }

    getCategoryById(
        categoryId: string,
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http
            .get<SpotifyApi.SingleCategoryResponse>(`${this.browseUrl}/categories/${categoryId}`, {
                params,
            })
            .pipe(map((res) => res));
    }

    getCategoryPlaylists(
        categoryId: string,
        params: SpotifyApiParams = {
            limit: 50,
        }
    ) {
        return this.http
            .get<SpotifyApi.CategoryPlaylistsResponse>(`${this.browseUrl}/categories/${categoryId}/playlists`, {
                params,
            })
            .pipe(map((res) => res.playlists));
    }
}
