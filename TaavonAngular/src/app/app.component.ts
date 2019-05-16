import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedin: boolean = false;
  UserLogin(userData) {
    this._http.get('/api/login', { params: { Username: userData.userName, Password: userData.password } }).subscribe(res => {
      if (res.json().status == true) {
        this.loggedin = true;
      }
    })
  }
  LogoutUser() {
    this._http.get('/api/logout').subscribe(res =>{
      this.loggedin = false;
    })
  }
  constructor(private _http: Http , private _route: Router) {}
  ngOnInit() {
    this._route.navigate(['login'])    
  }
}
