import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatchesServis } from '../servisi/matches.servis';
@Component({
  selector: 'app-izbornik',
  templateUrl: './izbornik.component.html',
  styleUrls: ['./izbornik.component.css']
})
export class IzbornikComponent implements OnInit {

  constructor(private http:HttpClient,private matchesServis:MatchesServis){
  }
  ngOnInit(): void {}
  toogle:boolean=true;

  enableDisableRule():void{
    this.toogle=!this.toogle;
  }

  onSportClick(SportId:number){
    this.matchesServis.emmitSportIdSelection(SportId);
  }

}
