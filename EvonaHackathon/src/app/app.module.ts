import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SportComponent } from './sport/sport.component';
import { LeagueComponent } from './league/league.component';
import { MatchComponent } from './match/match.component';
import { SportlistComponent } from './sportlist/sportlist.component';


@NgModule({
  declarations: [
    AppComponent,
    SportComponent,
    LeagueComponent,
    MatchComponent,
    SportlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
