import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.css']
})
export class SportlistComponent implements OnInit {
  post={};
  readonly ROOT_URL = 'https://stageapis.bet-x.eu/SportOfferApi/api/sport/offer/v3/matches/live';
  posts:any;
  sports: any[] = [];
  constructor(private http:HttpClient){
  }
  mappedArray = [];

  ngOnInit() {
    this.posts = this.http.get(this.ROOT_URL).subscribe(s=>{
      this.sports = s as any;
      console.log("Ovo je post",this.sports);
    })
  }

}
