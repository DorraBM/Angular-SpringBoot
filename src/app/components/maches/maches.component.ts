import { ServiceMatchesService } from './../../../service/service-matches.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maches',
  templateUrl: './maches.component.html',
  styleUrls: ['./maches.component.css']
})
export class MachesComponent implements OnInit {
  text="Matches"
  matches:any=[]
  term:any
  constructor(private matchService:ServiceMatchesService) { }

  ngOnInit(): void {
    // this.matches=JSON.parse(localStorage.getItem("matches")|| '[]')
    // console.log('********matches',this.matches);

    this.matchService.getAllMatches().subscribe((res)=>
    { this.matches = res;
      console.log('********matches',this.matches);
    }
    
    )
    
  }
  updateMatches(x:any)
  {
    this.matches=x
  }

  


}
