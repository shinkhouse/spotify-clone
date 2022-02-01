import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject, combineLatest, debounceTime, map, of, startWith, Subject, switchMap, tap, timer } from 'rxjs';
import { PlaybackService } from '../../services/playback.service';
import { PlaybackStore } from '../../stores/playback.store';
import { PlayerService } from '../../services/player.service';

@Component({
    selector: 'spotify-player-toolbar',
    templateUrl: './player-toolbar.component.html',
    styleUrls: ['./player-toolbar.component.scss'],
})
export class PlayerToolbarComponent implements OnInit {
    isPlaying$ = this.playbackStore.isPlaying$.pipe(startWith(false));
    currentTrack$ = this.playbackStore.currentTrack$;

    constructor(private playbackStore: PlaybackStore, private playbackService: PlaybackService) {
        this.setVolume$
            .pipe(
                debounceTime(50),
                switchMap((volume) => this.playbackService.setVolume(volume))
            )
            .subscribe();
    }
    ngOnInit(): void {}

    async togglePlay() {
        this.playbackService.play();
    }

    async nextSong() {
        this.playbackService.nextSong();
    }

    async previousSong() {
        this.playbackService.previousSong();
    }

    isSliderMoving$ = new BehaviorSubject<boolean>(false);
    progress$ = combineLatest([this.playbackStore.playback$, this.isSliderMoving$]).pipe(
        debounceTime(20),
        switchMap(([{ paused, position }, isMoving]) => {
            if (paused || isMoving) {
                return of(position);
            }
            const progressTimer$ = timer(0, 1000);
            return progressTimer$.pipe(
                map((x) => x * 1000),
                map((x) => x + position)
            );
        })
    );
    max$ = this.playbackStore.playback$.pipe(map(({ duration }) => duration));

    seek(positions: MatSliderChange) {
        if (Array.isArray(positions)) {
            const lastPosition = positions[positions.length - 1];
            this.playbackService.seek(lastPosition);
        }
        if (typeof positions === 'number') {
            this.playbackService.seek(positions);
        }
        this.isSliderMoving$.next(false);
    }

    onChange() {
        this.isSliderMoving$.next(true);
    }

    private _volume!: number;
    volume$ = this.playbackStore.volume$.pipe(tap((volume) => (this._volume = volume)));
    setVolume$ = new Subject<number>();
    volumeIcon$ = this.volume$.pipe(
        map((volume) => volume * 100),
        map((volume) => {
            if (volume >= 70) {
                return 'volume_up';
            }
            if (volume >= 30) {
                return 'volume_down';
            }
            if (volume > 0) {
                return 'volume_mute';
            }
            return 'volume_off';
        })
    );

    private _beforeMutedVolume!: number;

    toggleMute() {
        if (this._volume > 0) {
            this._beforeMutedVolume = this._volume;
            this.setVolume$.next(0);
        } else {
            this.setVolume$.next(this._beforeMutedVolume);
        }
    }

    async changeVolume(positions: MatSliderChange) {
        if (typeof positions === 'number') {
            this.setVolume$.next(positions);
        }
        if (Array.isArray(positions)) {
            this.setVolume$.next(positions[positions.length - 1]);
        }
    }
}
