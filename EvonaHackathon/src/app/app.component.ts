import { Component, Input } from '@angular/core';
import { MyComponentComponent } from './my-component/my-component.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Evona u srcu <3';


  ngOnInit() {
  }
}
