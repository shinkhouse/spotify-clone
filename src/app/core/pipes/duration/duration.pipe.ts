import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {
    transform(durationMs: number | null): string {
        if (!durationMs) {
            return '';
        }
        return this.formatDurationMs(durationMs);
    }

    pad(num: number, length = 2) {
        return `${num}`.padStart(length, '0');
    }

    formatDurationMs(durationMs: number) {
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000);
        if (seconds === 60) {
            return `${minutes + 1}:00`;
        }
        return `${minutes}:${this.pad(seconds)}`;
    }
}
