import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 matches:any
 players:any
  constructor() { }

  ngOnInit(): void {
    this.matches=JSON.parse(localStorage.getItem("matches")|| '[]')
    console.log('********',this.matches);
    this.players=JSON.parse(localStorage.getItem("players")|| '[]')
    console.log('********',this.players);
    
  }

  deleteMatch(id:any)
  {
     let pos 
     for (let i=0; i<this.matches.length;i++)
     {
      if(this.matches[i].id==id)
      pos=i
     }

     this.matches.splice(pos,1)
     localStorage.setItem("matches",JSON.stringify(this.matches))
  }

  deletePlayer(id:any)
  {
     let pos 
     for (let i=0; i<this.players.length;i++)
     {
      if(this.players[i].id==id)
      pos=i
     }

     this.players.splice(pos,1)
     localStorage.setItem("players",JSON.stringify(this.players))
  }

}
