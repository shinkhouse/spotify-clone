import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'spotify-player-toolbar',
  templateUrl: './player-toolbar.component.html',
  styleUrls: ['./player-toolbar.component.scss']
})
export class PlayerToolbarComponent implements OnInit {

  constructor(private player: PlayerService) { }

  ngOnInit(): void {
  }

}
