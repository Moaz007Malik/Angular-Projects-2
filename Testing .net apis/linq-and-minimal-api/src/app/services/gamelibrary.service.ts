import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../Interfaces/Data';
import { apiURL } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class GamelibraryService {
  apiURL = apiURL;
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiURL);
  }

  getPlayerById(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiURL}/${id}`);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiURL, player);
  }

  updatePlayer(id: number, player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.apiURL}/${id}`, player);
  }

  deletePlayer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
