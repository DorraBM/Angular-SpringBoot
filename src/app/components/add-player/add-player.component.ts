import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/service/players.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:any={};
  addPlayerForm:FormGroup;
  id:any
  title:any
    constructor( private formBuilder:FormBuilder,private playerService:PlayersService,private router:Router,private activatedRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.paramMap.get("playerId")
      console.log("hereeee idd",this.id);
      if (this.id) {
        this.title="EDIT"
        this.getPlayerById()
      } else {
        this.title="ADD"
      
      }
      this.addPlayerForm=this.formBuilder.group({
        name:[''],
        forward:[]
        
  
      })
  
    }
    addEditPlayer()
    { 
      if(this.id)
      {
        console.log("here editing player",this.player);
      
      this.playerService.updatePlayer(this.player).subscribe(()=>{
        this.router.navigate(["/admin"])
      })
      }
      else
      {
        console.log("here form player **********", this.player);
      let playerId = JSON.parse(localStorage.getItem("playerId") || '5')
      this.player.id = playerId
      this.playerService.addPlayer(this.player).subscribe((res) => {
        console.log("hereeeee res");
  
        this.router.navigate(["/admin"])
  
      })
    
      }
      
      
      
  
    }

    getPlayerById(){
      this.playerService.getPlayerById(this.id).subscribe((res)=>{
        console.log("match by id",res);
        this.player=res
        
      })
    }
  
  }