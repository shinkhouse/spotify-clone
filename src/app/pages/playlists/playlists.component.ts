import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
    selector: 'app-playlists',
    templateUrl: './playlists.component.html',
    styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
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

    getCardSubtitle(subtitle: string) {
      return `By ${subtitle}`;
    }
}
