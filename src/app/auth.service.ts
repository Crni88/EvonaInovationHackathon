import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  body = 'grant_type=password&username=haris&password=Mostar21&client_id=20892ccf14bd4ef0b276a7226bef8a6d&terminal_type=2';
  // header = 'content-type=application/x-www-form-urlencoded';
   header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  //  header = new HttpHeaders().set('Content-Type', 'content-type=application/x-www-form-urlencoded');

  constructor(private http: HttpClient) { 
    

  }



  Login() {
    return this.http.post('https://stageapis.bet-x.eu/authapi/token', this.body, {headers: this.header});
  }

 



}
