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
            const brightColors = res.filter((res) => {
                return this.getBrighterColor(res);
            });
            console.log(brightColors);
            // console.log(url, playlistIndex);
            this.featuredPlaylists.playlists.items[playlistIndex].colors = brightColors;
        });
    }

    getItemBackgroundColor(playlistIndex: number, ev: any) {
        if (ev.type === 'mouseenter') {
            this.backgroundColor = this.featuredPlaylists.playlists.items[playlistIndex].colors[0];
        } else {
            this.backgroundColor = this.featuredPlaylists.playlists.items[0].colors[0];
        }
    }

    getBrighterColor(hex: string) {
        var c = hex.substring(1); // strip #
        var rgb = parseInt(c, 16); // convert rrggbb to decimal
        var r = (rgb >> 16) & 0xff; // extract red
        var g = (rgb >> 8) & 0xff; // extract green
        var b = (rgb >> 0) & 0xff; // extract blue

        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma > 140) {
            return true;
        }
        return false;
    }
}
