import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowseService } from 'src/app/core/services/browse.service';

@Component({
    selector: 'spotify-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
    public genreId: string = '';
    public genre: any;
    public playlists: any;
    constructor(private router: Router, private route: ActivatedRoute, private browseService: BrowseService) {
        this.genreId = this.route.snapshot.paramMap.get('genreId') || '';
    }

    ngOnInit(): void {
        this.getCategoryInfo();
        this.getGenrePlaylists();
    }

    getCategoryInfo() {
        this.browseService.getCategoryById(this.genreId).subscribe((res) => {
            this.genre = res;
            console.log(this.genre);
        });
    }

    getGenrePlaylists() {
        this.browseService.getCategoryPlaylists(this.genreId).subscribe((res) => {
            this.playlists = res;
        });
    }

    getCardSubtitle(subtitle: string) {
        return `By ${subtitle}`;
    }
}
