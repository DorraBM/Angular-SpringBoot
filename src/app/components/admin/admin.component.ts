import { Router } from '@angular/router';
import { ServiceMatchesService } from './../../../service/service-matches.service';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/service/players.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 matches:any
 players:any
  constructor(private router:Router, private matchService:ServiceMatchesService,private playerService:PlayersService) { }

  ngOnInit(): void {
    this.getAllMatches()
    this.getAllPlayers()
    // this.matches=JSON.parse(localStorage.getItem("matches")|| '[]')
    // console.log('********',this.matches);
    // this.players=JSON.parse(localStorage.getItem("players")|| '[]')
    // console.log('********',this.players);
    
  }

  deleteMatch(id:any)
  {
      // let pos 
      // for (let i=0; i<this.matches.length;i++)
      // {
      //  if(this.matches[i].id==id)
      //  pos=i
      // }

    //  this.matches.splice(pos,1)
    //  localStorage.setItem("matches",JSON.stringify(this.matches))
    this.matchService.deleteMatch(id).subscribe(()=>{
      console.log("success delete!")
     
      this.getAllMatches()
    })
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

  getAllMatches() { 
    this.matchService.getAllMatches().subscribe((res)=>{
      console.log("All matches:",res);
      this.matches = res
      
    })
  }

  getAllPlayers() {
    this.playerService.getAllPlayers().subscribe((res)=>{
      console.log("players json",res);
      this.players = res
      
  })
}

navigate(id:any)
{
  this.router.navigate([`add-match/${id}`]);
}

}
