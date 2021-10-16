import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { IzbornikComponent } from './izbornik/izbornik.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IzbornikComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
