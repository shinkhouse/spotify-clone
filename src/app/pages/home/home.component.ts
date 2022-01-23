import { Component, OnInit } from '@angular/core';
import { BrowseService } from 'src/app/core/services/browse.service';
import { ColorService } from 'src/app/core/services/color.service';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public featuredPlaylists: any;
    public categories: any;
    public backgroundColor: string = '#1db954';
    constructor(private browseService: BrowseService, private colors: ColorService) {}

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
            this.featuredPlaylists.playlists.items.forEach((playlist: any, index: number) => {
                this.getAlbumColors(playlist?.images[0]?.url, index);
            });
        });
    }

    getCategories() {
        this.browseService.getAllCategories().subscribe((res) => {
            this.categories = res;
            // console.log(this.categories);
        });
    }

    getAlbumColors(url: string, playlistIndex: number) {
        this.colors.getAlbumColors(url).subscribe((res) => {
            // console.log(url, playlistIndex);
            this.featuredPlaylists.playlists.items[playlistIndex].colors = res;
        });
    }

    getItemBackgroundColor(playlistIndex: number, ev: any) {
        if (ev.type === 'mouseenter') {
            this.backgroundColor = this.featuredPlaylists.playlists.items[playlistIndex].colors[0];
        } else {
            this.backgroundColor = this.featuredPlaylists.playlists.items[0].colors[0];
        }
    }
}
