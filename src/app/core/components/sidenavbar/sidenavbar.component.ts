import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';

@Component({
    selector: 'spotify-sidenavbar',
    templateUrl: './sidenavbar.component.html',
    styleUrls: ['./sidenavbar.component.scss'],
})
export class SidenavbarComponent implements OnInit {
    public navItems = [
        { label: 'Home', path: '', exact: true },
        { label: 'Search', path: '/search' },
        { label: 'My Playlists', path: '/collection/playlists' },
        { label: 'My Podcasts', path: '/collection/podcasts' },
        { label: 'My Albums', path: '/collection/albums' },
        { label: 'My Artists', path: '/collection/artists' },
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
