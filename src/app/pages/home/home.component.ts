import { Component, OnInit } from '@angular/core';
import { BrowseService } from 'src/app/core/services/browse.service';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public featuredPlaylists: any;
  public categories: any;
  constructor(private browseService: BrowseService) { }

  ngOnInit(): void {
    this.getFeaturedPlaylists();
    this.getCategories();
  }

  getGreetingMessage() {
    const now = new Date();
    const hours = now.getHours();
    return hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
  }

  getFeaturedPlaylists() {
    this.browseService.getAllFeaturedPlaylists().subscribe((res) => {
      this.featuredPlaylists = res;
    })
  }

  getCategories() {
    this.browseService.getAllCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    })
  }

}
