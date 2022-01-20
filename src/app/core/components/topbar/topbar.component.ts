import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'spotify-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
    constructor(private location: Location) {}

    ngOnInit(): void {}

    goBack() {
        this.location.back();
    }

    goForward() {
        this.location.forward();
    }
}
