import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'spotify-play-button',
    templateUrl: './play-button.component.html',
    styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent {
    @Input() isPlaying: boolean | null | undefined;
    @Input() primary = false;
    @Input() isFab: boolean = false;
    @Output() togglePlay = new EventEmitter<boolean>();
}
