import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spotify-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {
  @Input() cardLink: string = '';
  @Input() imageSource: string = '';
  @Input() imageShape: 'round' | 'square' = 'square';
  @Input() cardTitle: string = '';
  @Input() cardSubtitle: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
