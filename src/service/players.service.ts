import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerURL="  http://localhost:3000/players ";
  constructor( private http:HttpClient) { }
  getAllPlayers() {
    return this.http.get<{res:any}>(this.playerURL);
  
  }
  addPlayer(p:any)
  {
    return this.http.post<{res:any}>(this.playerURL,p);
  }
}

