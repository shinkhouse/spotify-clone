import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ColorService {
    constructor(private http: HttpClient) {}

    getAlbumColors(url: string) {
        const body = {
            url: url,
        };

        return this.http.post<string[]>(`https://api.samuelhinkhouse.com/get-colors-from-image`, body);
    }
}
