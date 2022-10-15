import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:any={};
  addPlayerForm:FormGroup;
    constructor( private formBuilder:FormBuilder) { }
  
    ngOnInit(): void {
  
      this.addPlayerForm=this.formBuilder.group({
        name:[''],
        forward:[]
        
  
      })
  
    }
    submit()
    { console.log("here form player ****",this.player)
    let playerId=JSON.parse(localStorage.getItem("playerId"|| '1'))
    let players=JSON.parse(localStorage.getItem("players")|| '[]')
  
    this.player.id=playerId
    players.push(this.player)
  
    localStorage.setItem("players",JSON.stringify(players))
    localStorage.setItem("playerId",JSON.stringify(playerId+1))
  
    }
  
  }