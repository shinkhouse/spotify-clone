// MAGIC LINE - WITHOUT THIS WOULD CAUSE THE BUILD TO FAIL
/// <reference types="spotify-api" />

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { filter, map, switchMapTo, tap } from 'rxjs/operators';
import { AuthorizationService } from '../services/authorization.service';
import { SpotifyService } from '../services/spotify.service';

export interface AuthState extends SpotifyApi.CurrentUsersProfileResponse {
    accessToken: string | null;
    tokenType: string | null;
    expiresIn: number;
    state: string | null;
}

@Injectable({ providedIn: 'root' })
export class AuthStore extends ComponentStore<AuthState> {
    readonly token$ = this.select((s) => s.accessToken).pipe(filter((token) => !!token)) as Observable<string>;
    readonly country$ = this.select((s) => s.country);
    readonly userName$ = this.select((s) => s.display_name);
    readonly userProduct$ = this.select((s) => s.product);
    readonly userAvatar$ = this.select(
        (s) =>
            (s.images && s.images[0]?.url) ||
            'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/p320x320/252282932_10159497365091153_7396796593856072108_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=dXomLSpotUkAX8w_uOm&_nc_ht=scontent-iad3-2.xx&edm=AP4hL3IEAAAA&oh=00_AT9_AKWAoa6xFQONmKrO2i6nKXz1kb2EOLIcN46P-UM6AQ&oe=61F31147'
    );
    readonly getUserId = () => this.get().id;
    readonly getToken = () => this.get().accessToken;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthorizationService,
        private spotify: SpotifyService
    ) {
        super(<AuthState>{});
    }

    readonly setCurrentUser = this.updater((state, user: SpotifyApi.CurrentUsersProfileResponse) => {
        return {
            ...state,
            ...user,
        };
    });

    readonly init = this.effect((params$) => params$.pipe(switchMapTo(this.initAuth())));

    redirectToAuthorize() {
        const url = this.auth.createAuthorizeURL();
        window.location.href = url;
    }

    private initAuth() {
        if (!window.location.hash) {
            this.redirectToAuthorize();
        }

        return this.route.fragment.pipe(
            filter((fragment) => !!fragment),
            map((fragment) => new URLSearchParams(fragment as string)),
            map((params) => ({
                accessToken: params.get('access_token'),
                tokenType: params.get('token_type'),
                expiresIn: Number(params.get('expires_in')),
                state: params.get('state'),
            })),
            tap((params) => {
                this.patchState(params);
                console.info('[Spotify Clone] Authenticated!');
            }),
            tap(() => {
                this.setCurrentUser(this.spotify.getMe());
                this.router.navigate([]);
            })
        );
    }
}
