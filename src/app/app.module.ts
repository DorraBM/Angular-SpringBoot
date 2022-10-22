import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CantactComponent } from './components/cantact/cantact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { MachesComponent } from './components/maches/maches.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersComponent } from './components/players/players.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchComponent } from './components/match/match.component';
import { PlayerComponent } from './components/player/player.component';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { MyDirectiveDirective } from './pipes/my-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CantactComponent,
    SignupComponent,
    LoginComponent,
    AddMatchComponent,
    AdminComponent,
    MachesComponent,
    AddPlayerComponent,
    PlayersComponent,
    BannerComponent,
    MatchComponent,
    PlayerComponent,
    MyFilterPipe,
    MyDirectiveDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
