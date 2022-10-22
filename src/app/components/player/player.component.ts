import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerInput:any
  @Output() newPlayers=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

}
