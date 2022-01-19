import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'spotify-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  public profile: any;
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {

    this.getProfile();
  }

  getProfile() {
    this.spotify.getMe().subscribe((res) => {
      this.profile = res;
    })
  }

}
