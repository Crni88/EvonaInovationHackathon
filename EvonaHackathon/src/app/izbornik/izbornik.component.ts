import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-izbornik',
  templateUrl: './izbornik.component.html',
  styleUrls: ['./izbornik.component.css']
})
export class IzbornikComponent implements OnInit {

  selectedSportId:any;
  constructor() {
    
   }

  ngOnInit(): void {
  }
  
  toogle1:boolean=true;
  toogle2:boolean=false;
  toogle3:boolean=false;
 
}
