import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maches',
  templateUrl: './maches.component.html',
  styleUrls: ['./maches.component.css']
})
export class MachesComponent implements OnInit {
  text="Matches"
  matches:any
  constructor() { }

  ngOnInit(): void {
    this.matches=JSON.parse(localStorage.getItem("matches")|| '[]')
    console.log('********',this.matches);
    
  }
  updateMatches(x:any)
  {
    this.matches=x
  }

  


}
