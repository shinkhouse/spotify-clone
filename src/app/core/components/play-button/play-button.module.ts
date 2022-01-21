import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayButtonComponent } from './play-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [PlayButtonComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule],
    exports: [PlayButtonComponent],
})
export class PlayButtonModule {}
