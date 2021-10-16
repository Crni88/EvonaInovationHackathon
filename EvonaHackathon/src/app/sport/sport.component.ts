import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor() { }

   @Input() Sport = 'sport';

  ngOnInit(): void {
  }

}
