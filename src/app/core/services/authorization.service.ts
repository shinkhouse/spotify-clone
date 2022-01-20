import { Injectable } from '@angular/core';
import { spotify } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    spotifyAuthorizationUrl = spotify.spotifyAuthorizeUrl
    clientId = spotify.clientId
    scopes = spotify.scopes

    constructor() {}

    createAuthorizeURL() {
        const params = new URLSearchParams({
            client_id: this.clientId,
            redirect_uri: `${window.location.origin}/spotify-clone/`,
            scope: encodeURIComponent(this.scopes.join(' ')),
            response_type: 'token',
        });
        return `${this.spotifyAuthorizationUrl}?${params.toString()}`;
    }
}
