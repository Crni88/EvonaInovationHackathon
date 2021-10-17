import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-izbornik',
  templateUrl: './izbornik.component.html',
  styleUrls: ['./izbornik.component.css']
})
export class IzbornikComponent implements OnInit {

 
  constructor() {
    
   }

  ngOnInit(): void {
  }
  
  toogle1:boolean=true;
  toogle2:boolean=false;
  toogle3:boolean=false;
  enableDisableRule(id:string):void{
    console.log("click");
    if(id==="obruc1")
    {
      if(!this.toogle1)
      {
        this.toogle1=!this.toogle1;
      this.toogle2=false;
      this.toogle3=false;
      }
      
    }
    else if(id==="obruc2")
    {
      if(!this.toogle2)
      {
        this.toogle2=!this.toogle2;
      this.toogle1=false;
      this.toogle3=false;
      }
    }
    else if(id==="obruc3")
    {
      if(!this.toogle3)
      {
      this.toogle3=!this.toogle3;
      this.toogle1=false;
      this.toogle2=false;
      }
    }
   
  }

}
