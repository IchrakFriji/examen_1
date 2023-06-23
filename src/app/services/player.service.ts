import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl= environment.api+'/players'

  constructor(private http: HttpClient) { }
  getPlayers() {
    return this.http.get(this.playerUrl);
  }
  addPlayer(player: Player): Observable<Player> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Player>(this.playerUrl, player, httpOptions);
  }
  getPlayerById(id: number): Observable<Player> {
    const url = `${this.playerUrl}/${id}`;
    return this.http.get<Player>(url);
  }
  updatePlayer(player: Player): Observable<Player> {
    const url = `${this.playerUrl}/${player.id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Player>(url, player, { headers });
  }
}
