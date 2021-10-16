import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-izbornik',
  templateUrl: './izbornik.component.html',
  styleUrls: ['./izbornik.component.css']
})
export class IzbornikComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toogle:boolean=true;
  
  enableDisableRule():void{
    this.toogle=!this.toogle;
  }
}
