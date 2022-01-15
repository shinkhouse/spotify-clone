/// <reference types="spotify-api" />

import { Component, OnInit } from '@angular/core';
import { AuthStore } from './core/auth.store';
@Component({
    selector: 'spotify-clone-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'spotify-clone';

    constructor(private authStore: AuthStore) {}

    ngOnInit() {
        this.authStore.init();
    }
}
