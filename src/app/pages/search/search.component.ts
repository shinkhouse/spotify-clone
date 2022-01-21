import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchApiService } from 'src/app/core/services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public queryParams: any;
    public searchResults: any = null;

    constructor(private route: ActivatedRoute, private search: SearchApiService) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((res) => {
            console.log(res);
            this.queryParams = res;
            if (this.queryParams.searchQuery) {
                this.getSearchResults(this.queryParams.searchQuery);
            }
        });
    }

    getSearchResults(searchQuery: string) {
        this.search.search(searchQuery).subscribe((res) => {
            this.searchResults = res;
            console.log(res);
        });
    }

    getCardSubtitle(subtitle: string) {
        return `By ${subtitle}`;
    }
}
