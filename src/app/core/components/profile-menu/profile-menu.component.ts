import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'spotify-profile-menu',
    templateUrl: './profile-menu.component.html',
    styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
    public profile: any;
    constructor(private spotify: SpotifyService) {}

    ngOnInit(): void {
        this.getProfile();
    }

    getProfile() {
        this.spotify.getMe().subscribe((res) => {
            this.profile = res;
        });
    }

    onMenuOpened() {
        const menuButton = document.getElementById('menu-button');
        if (menuButton) {
            const elems = document.getElementsByClassName('mat-menu-item') as any;
            for (const item of elems) {
                item.style.width = `${menuButton.offsetWidth}px`;
            }
        }
    }
}
