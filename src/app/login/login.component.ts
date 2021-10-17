import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common'; 
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formaLogin! : FormGroup;
  public password! : FormControl;
  public username! : FormControl;
  constructor(private authService: AuthService,  private router: Router, private formBuilder: FormBuilder ) { }
  ngOnInit(): void {
    this.formaLogin = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })

  }
  get formControls() { return this.formaLogin.controls; }
  onLogin() {
     const username = this.formaLogin.get('username')?.value;
   const password = this.formaLogin.get('password')?.value;
        console.log(username);
        console.log(password);
  

  this.authService.Login(username, password).subscribe(
    res => {
      
    console.log(res);
    //redirect to
    localStorage.setItem('token', JSON.stringify(res));
  }, 
  err=> {
    (document.querySelector('.incorrect') as HTMLElement).style.display = 'inline';
  })
  }


}