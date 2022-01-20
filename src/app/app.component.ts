/// <reference types="spotify-api" />

import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthStore } from './core/auth.store';
@Component({
    selector: 'spotify-clone-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'spotify-clone';

    constructor(private authStore: AuthStore, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconLiteral('play', sanitizer.bypassSecurityTrustHtml('assets/icons/play.svg'));
        iconRegistry.addSvgIconLiteral('previous', sanitizer.bypassSecurityTrustHtml('assets/icons/previous.svg'));
        iconRegistry.addSvgIconLiteral('next', sanitizer.bypassSecurityTrustHtml('assets/icons/next.svg'));
    }

    ngOnInit() {
        this.authStore.init();
    }
}
