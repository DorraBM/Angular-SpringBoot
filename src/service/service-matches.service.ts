import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMatchesService {

  matchURL="http://localhost:3000/matches";
  constructor( private http:HttpClient) { }
  getAllMatches() {
    return this.http.get<{res:any}>(this.matchURL);
  
  }

  addMatch(m:any)
  {
    return this.http.post<{res:any}>(this.matchURL,m);
  }

  deleteMatch(id:any)
  {
    return this.http.delete(this.matchURL+"/"+id);
  }

  getMatchById(id:any)
  {
    return this.http.get(this.matchURL+"/"+id);
  }

  updateMatch(form:any)
  {
    return this.http.put(this.matchURL+"/"+form.id, form);
  }
}
