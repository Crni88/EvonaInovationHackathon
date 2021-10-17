import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formaLogin! : FormGroup;
  public password! : string;
  public username! : string;
  constructor(private authService: AuthService) { }
  
  public loginInvalid = false;
  ngOnInit(): void {
    this.formaLogin = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onLogin() {
   const username = this.formaLogin.get('username')?.value;
   const password = this.formaLogin.get('password')?.value;
        console.log(username);
        console.log(password);

  //  this.authService.Login(username, password).subscribe(res => console.log(res))
  this.authService.Login(username, password).subscribe(res => console.log(res))

  
    
  }
}