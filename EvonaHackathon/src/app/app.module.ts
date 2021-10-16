import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SportComponent } from './sport/sport.component';
import { LeagueComponent } from './league/league.component';
import { MatchComponent } from './match/match.component';
import { SportlistComponent } from './sportlist/sportlist.component';
import { HeaderComponent } from './components/header/header.component';
import { BanneriComponent } from './components/banneri/banneri.component';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';
import { FooterComponent } from './footer/footer.component';

import { IzbornikComponent } from './izbornik/izbornik.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    SportComponent,
    LeagueComponent,
    MatchComponent,
    SportlistComponent,
    HeaderComponent,
    BanneriComponent,
    BannerSliderComponent,
    FooterComponent,
    IzbornikComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
