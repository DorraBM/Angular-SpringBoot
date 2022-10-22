import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CantactComponent } from './components/cantact/cantact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachesComponent } from './components/maches/maches.component';

const routes: Routes = [
  {path:'contact',component:CantactComponent},
  {path:"",component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'add_match',component:AddMatchComponent},
  {path:'add_match/:matchId',component:AddMatchComponent}, 
  {path:'admin',component:AdminComponent},
  {path:'matches',component:MachesComponent},
  {path:'players',component:PlayersComponent},
  {path:'add_player',component:AddPlayerComponent},
  {path:'add_player/:playerId',component:AddPlayerComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
