import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
    selector: 'spotify-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
    constructor(private location: Location, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.searchControl.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                filter((term) => term.length >= 1)
            )
            .subscribe((term) => {
                this.syncQueryParams(term);
            });

        const queryParam = this.route.snapshot.queryParams['searchQuery'];
        if (queryParam) {
            this.searchControl.patchValue(queryParam);
        }
    }

    goBack() {
        this.location.back();
    }

    goForward() {
        this.location.forward();
    }

    doesRouteContainSearch(): boolean {
        return this.router.url.includes('search');
    }

    searchControl: FormControl = new FormControl('');

    private syncQueryParams(term: string) {
        this.router.navigate(['.'], {
            relativeTo: this.route,
            queryParams: { searchQuery: term },
            replaceUrl: true,
        });
    }
}
