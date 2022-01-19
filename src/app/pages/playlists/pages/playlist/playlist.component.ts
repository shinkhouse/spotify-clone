import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
    selector: 'spotify-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
    public playlistId: string = '';
    public playlistInfo: any = null;
    public playlistTracks: any = null;
    constructor(private router: Router, private route: ActivatedRoute, private playlistService: PlaylistService) {
      this.playlistId = this.route.snapshot.paramMap.get('playlistId') || '';
    }

    ngOnInit(): void {
      this.getPlaylistById();
      this.getPlaylistTracks();
    }

    getPlaylistById() {
      this.playlistService.getById(this.playlistId).subscribe((res) => {
        this.playlistInfo = res;
      })
    }

    getPlaylistTracks() {
      this.playlistService.getTracks(this.playlistId).subscribe((res) => {
        this.playlistTracks = res;
      })
    }
}
