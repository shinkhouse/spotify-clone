/// <reference types="spotify-api" />

import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthStore } from './core/stores/auth.store';
import { PlaybackService } from './core/services/playback.service';
@Component({
    selector: 'spotify-clone-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'spotify-clone';

    constructor(
        private authStore: AuthStore,
        private playbackService: PlaybackService,
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIcon('play', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/play.svg'));
        iconRegistry.addSvgIcon('pause', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pause.svg'));
        iconRegistry.addSvgIcon('previous', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/previous.svg'));
        iconRegistry.addSvgIcon('next', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/next.svg'));
        iconRegistry.addSvgIcon('shuffle', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/shuffle.svg'));
        iconRegistry.addSvgIcon('repeat', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/repeat.svg'));
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
        iconRegistry.addSvgIcon('library', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/library.svg'));
        iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
    }

    ngOnInit() {
        this.authStore.init();
        this.playbackService.init();
    }
}
