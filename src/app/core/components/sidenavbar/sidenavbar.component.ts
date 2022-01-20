import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';

@Component({
    selector: 'spotify-sidenavbar',
    templateUrl: './sidenavbar.component.html',
    styleUrls: ['./sidenavbar.component.scss'],
})
export class SidenavbarComponent implements OnInit {
    public navItems = [
        { label: 'Home', path: '/home', exact: true, icon: 'home_outlined' },
        { label: 'Search', path: '/search', icon: 'search' },
        { label: 'My Playlists', path: '/collection/playlists', icon: 'queue_music' },
        { label: 'My Podcasts', path: '/collection/podcasts', icon: 'podcasts' },
        { label: 'My Albums', path: '/collection/albums', icon: 'album' },
        { label: 'My Artists', path: '/collection/artists', icon: 'art_track' },
    ];
    public playlists: any;
    constructor(private playlistService: PlaylistService) {}

    ngOnInit(): void {
        this.getPlaylists();
    }

    getPlaylists() {
        this.playlistService.getUserSavedPlaylists().subscribe((res) => {
            this.playlists = res;
        });
    }
}
