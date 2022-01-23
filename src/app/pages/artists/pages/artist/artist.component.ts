import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArtistService } from 'src/app/core/services/artist.service';

@Component({
    selector: 'spotify-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
    public artistId: string = '';
    public artistInfo: any;
    public artistTopTracks: any;
    public artistAlbums: any;
    public backgroundColor: string = '#009688'

    constructor(private artistService: ArtistService, private route: ActivatedRoute) {
        this.route.paramMap.subscribe((res: Params) => {
            this.artistInfo = null;
            this.artistTopTracks = null;
            console.log(res['params'].artistId);
            this.artistId = res['params'].artistId;
            this.getArtistInfoById();
            this.getArtistTopTracks();
            this.getArtistsAlbums();
        });
    }

    ngOnInit(): void {}

    getArtistInfoById() {
        this.artistService.getArtist(this.artistId).subscribe((res) => {
            this.artistInfo = res;
        });
    }

    getArtistTopTracks() {
        this.artistService.getArtistTopTracks(this.artistId, 'us').subscribe((res) => {
            this.artistTopTracks = res;
        });
    }

    getArtistsAlbums() {
        this.artistService.getArtistAlbums(this.artistId).subscribe((res) => {
            this.artistAlbums = res;
        });
    }
}
