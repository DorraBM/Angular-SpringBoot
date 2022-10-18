import { ServiceMatchesService } from './../../../service/service-matches.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match:any={};
addMatchForm:FormGroup;
title:any;
id:any;
  constructor( private formBuilder:FormBuilder,private matchService:ServiceMatchesService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.activatedRoute.snapshot.paramMap.get("matchId")
    console.log("heree id",this.id)
    if (this.id) { 
      this.title="EDIT" 
      this.getMatchById()

    }
    else {
      this.title="ADD"
    }
      

    this.addMatchForm=this.formBuilder.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:['']

    })

  }
  addEditMatch()
  { 
  // console.log("here form match ****",this.match)
  // let matcheId=JSON.parse(localStorage.getItem("matchId"|| '1'))
  // let matches=JSON.parse(localStorage.getItem("matches")|| '[]')

  // this.match.id=matcheId
  // matches.push(this.match)

  // localStorage.setItem("matches",JSON.stringify(matches))
  // localStorage.setItem("matcheId",JSON.stringify(matcheId+1))
//   let matcheId=JSON.parse(localStorage.getItem("matchId"|| '15'))
//   this.match.id=matcheId
//   localStorage.setItem("matcheId",JSON.stringify(matcheId+1))
// this.matchService.addMatch(this.match).subscribe((res)=>{
//   console.log(res)
//   this.router.navigate(['/admin'])
  
//   this.addMatchForm.reset();

if(this.id)
{
  console.log("heree",this.match)
  this.matchService.updateMatch(this.match).subscribe(()=>{
    this.router.navigate(['/admin']);
  })

}
else
{
  console.log("heree",this.match) 
  let matchId=JSON.parse(localStorage.getItem("matchId"|| '15'))
 this.match.id=matchId
 this.matchService.addMatch(this.match).subscribe((res)=>{
 this.router.navigate(["/admin"]
 )})

}


  }

  getMatchById()
  {
    this.matchService.getMatchById(this.id).subscribe((res)=>{
      console.log("match by id",res);
      this.match=res[0]
  })
}


}
