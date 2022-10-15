import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match:any={};
addMatchForm:FormGroup;
  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.addMatchForm=this.formBuilder.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:['']

    })

  }
  submit()
  { console.log("here form match ****",this.match)
  let matcheId=JSON.parse(localStorage.getItem("matchId"|| '1'))
  let matches=JSON.parse(localStorage.getItem("matches")|| '[]')

  this.match.id=matcheId
  matches.push(this.match)

  localStorage.setItem("matches",JSON.stringify(matches))
  localStorage.setItem("matcheId",JSON.stringify(matcheId+1))

  }

}
