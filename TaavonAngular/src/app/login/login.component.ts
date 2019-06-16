import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  constructor(private _http: Http,
    private loginService: LoginService) { }
  username: string = '';
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
    sessionStorage.setItem('token', 'SbzlGl1Vwx1hRIQPAQZB');
    if (this.rememberMe) {
      localStorage.setItem('Username', this.username);
      localStorage.setItem('Password', this.password);
      localStorage.setItem('RememberMe', JSON.stringify(this.rememberMe));
    }
    this.loginService.login(this.username, this.password)
  }
}
