import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gamesUrl } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {
  constructor(private http: HttpClient) {}

  getAllGames(): Observable<any[]> {
    return this.http.get<any[]>(gamesUrl);
  }

  getGameById(id: number): Observable<any> {
    return this.http.get<any>(`${gamesUrl}/${id}`);
  }

  addGame(game: any): Observable<any> {
    return this.http.post<any>(gamesUrl, game);
  }

  updateGame(id: number, game: any): Observable<any> {
    return this.http.put<any>(`${gamesUrl}/${id}`, game);
  }

  deleteGame(id: number): Observable<any> {
    return this.http.delete<any>(`${gamesUrl}/${id}`);
  }
}
