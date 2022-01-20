import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    public profile: any;
    public topArtists: any;
    public topTracks: any;
    constructor(private spotify: SpotifyService) {}

    ngOnInit(): void {
        this.getProfile();
        this.getTopArtists();
        this.getTopTracks();
    }

    getProfile() {
        this.spotify.getMe().subscribe((res) => {
            this.profile = res;
        });
    }

    getTopArtists() {
        this.spotify.getTopArtists().subscribe((res) => {
            this.topArtists = res;
        });
    }

    getTopTracks() {
        this.spotify.getTopTracks().subscribe((res) => {
            this.topTracks = res;
        });
    }
}
