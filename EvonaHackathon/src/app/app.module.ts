import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BanneriComponent } from './components/banneri/banneri.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BanneriComponent,
    BannerSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
