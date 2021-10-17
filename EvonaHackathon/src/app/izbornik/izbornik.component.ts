import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatchesServis } from '../servisi/matches.servis';


@Component({
  selector: 'app-izbornik',
  templateUrl: './izbornik.component.html',
  styleUrls: ['./izbornik.component.css']
})
export class IzbornikComponent implements OnInit {

  // post={};

  // readonly ROOT_URL = 'https://stageapis.bet-x.eu/SportOfferApi/api/sport/offer/v3/matches/live';

  // posts:any;
  // sports: any[] = [];

  constructor(private http:HttpClient,private matchesServis:MatchesServis){
    // this.posts = this.http.get(this.ROOT_URL).subscribe(s=>{
    //   this.sports = s as any;
    //console.log("Ovo je post",this.sports);
    // });
  }

  ngOnInit(): void {}
  toogle:boolean=true;

  enableDisableRule():void{
    this.toogle=!this.toogle;
  }

  loadAll(){
   // console.log("Ucitaj sve");
  }

  onSportClick(SportId:number){
    this.matchesServis.emmitSportIdSelection(SportId);
  }

  loadFootball(){
    //console.log("Ucitavaj",this.sports);
    // for (let i = 0; i < this.sports.length; i++) {
    //   const element = this.sports[i];
    //   if(element.Id ===388)
    //   {console.log(element);}
    // }
  }
}
