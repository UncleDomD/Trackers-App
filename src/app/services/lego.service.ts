import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LegoGame } from '../common/lego-game';

@Injectable({
  providedIn: 'root'
})
export class LegoService {

  private legoGameUrl = "http://localhost:8080/api/legoGames"

  constructor(private httpClient: HttpClient) { }

  loadLegoGames(): Observable<LegoGame[]> {
    return this.httpClient.get<GetLegoGameResponse>(this.legoGameUrl).pipe(
      map(response => response._embedded.legoGames)
    );
  }

  getGameById(gId: number) {
    return this.httpClient.get(`${this.legoGameUrl}/${gId}`);
  }

  updateGameById(gId: number, legoGame: LegoGame): Observable<any> {
    return this.httpClient.put(`${this.legoGameUrl}/${gId}/update`, legoGame);
  }
} 


interface GetLegoGameResponse {
  _embedded: {
    legoGames: LegoGame[];
  }
}
