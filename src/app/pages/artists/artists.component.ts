import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/core/services/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public artists: any;
  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists() {
    this.artistService.getFollowedArtists().subscribe((res) => {
        this.artists = res;
    });
  }

}
