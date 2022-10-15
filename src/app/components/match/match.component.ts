import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
 @Input() matchInput:any
 @Output() newMatches=new EventEmitter<any>()
 txt1:string
 txt2:string
  constructor() { }

  ngOnInit(): void {
  

  }

  delete(id:any)
  { let matches=JSON.parse(localStorage.getItem("matches")|| '[]')
     let pos 
     for (let i=0; i<matches.length;i++)
     {
      if(matches[i].id==id)
      pos=i
     }
     

    
     matches.splice(pos,1)
     localStorage.setItem("matches",JSON.stringify(matches))
     this.newMatches.emit(matches)
     

  }
  


  compare(a:any,b:any)
  {
    if(Number(a)>Number(b))
    return ["green","win"]
    else if(Number(a)<Number(b))
    return ["red","lose"]
    else
    return ["yellow","egale"]
  }

}
