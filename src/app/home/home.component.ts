import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  listPlayer:any=[]
  player!:Player
  PlayerNumber:any
  
  constructor(private playerService: PlayerService, private router: Router) { }


  ngOnInit(): void {
  
   this.getPlayers()
  }
  getPlayers() {
    this.playerService.getPlayers().subscribe((data:any) => {
      this.listPlayer = data;
    });
  }
  inversEtat(playerId: number): void {
    this.playerService.getPlayerById(playerId).subscribe((player: Player) => {
      this.player = player;
      this.player.etat = !this.player.etat; 
      this.playerService.updatePlayer(this.player).subscribe(() => {
       
      });
    });
  }
  calculerBilan() {
    this.PlayerNumber= this.listPlayer.filter((player:any) => player.etat === true).length;
  }
}
