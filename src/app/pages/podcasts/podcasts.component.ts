import { Component, OnInit } from '@angular/core';
import { PodcastsService } from 'src/app/core/services/podcasts.service';

@Component({
    selector: 'spotify-podcasts',
    templateUrl: './podcasts.component.html',
    styleUrls: ['./podcasts.component.scss'],
})
export class PodcastsComponent implements OnInit {
    public podcasts: any;
    constructor(private podcastService: PodcastsService) {}

    ngOnInit(): void {
        this.getMyPodcasts();
    }

    getMyPodcasts() {
        this.podcastService.getMyPersonalShows().subscribe((res) => {
            this.podcasts = res;
        });
    }
}
