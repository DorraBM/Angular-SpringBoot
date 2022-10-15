import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any
  text="players"
  constructor() { }

  ngOnInit(): void {
    this.players=JSON.parse(localStorage.getItem("players")|| '[]')
    console.log('********',this.players);
    
  }

  delete(id:any)
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
