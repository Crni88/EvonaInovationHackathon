import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formaLogin! : FormGroup;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.formaLogin = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onLogin() {
    this.authService.Login().subscribe(res => console.log(res));
  }
}