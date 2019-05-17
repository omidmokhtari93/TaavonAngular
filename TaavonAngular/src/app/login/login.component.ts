import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router"
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(private _http: Http, private _route: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
  }
  username:string = '';
  password: string = '';
  rememberMe: boolean;
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('RememberMe')) !== null) {
      this.username = localStorage.getItem('Username');
      this.password = localStorage.getItem('Password');
      this.rememberMe = JSON.parse(localStorage.getItem('RememberMe'));
    }
  }

  userLogin() {
    localStorage.removeItem('Username');
    localStorage.removeItem('Password');
    localStorage.removeItem('RememberMe');
    sessionStorage.setItem('token', 'gfherthf6546df5g4egS');
    if (this.rememberMe) {
      localStorage.setItem('Username', this.username);
      localStorage.setItem('Password', this.password);
      localStorage.setItem('RememberMe', JSON.stringify(this.rememberMe));
    }
    this._http.get('/api/login', { params: { Username: this.username, Password: this.password } }).subscribe(res => {
      if (res.json().status == true) {
        this._route.navigate(['main'])
      } else {
        this.notifier.notify('error', res.json().message);
      }
    })
  }
}
