import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
 player= new Player()
  constructor(private playerService: PlayerService, private router: Router){

  }
  ngOnInit(): void {
    
  }
  save() {
    this.playerService.addPlayer(this.player).subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
