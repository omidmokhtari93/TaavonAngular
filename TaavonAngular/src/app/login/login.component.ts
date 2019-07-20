import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit, OnDestroy {
  signInForm: FormGroup
  remember = false;
  constructor(private loginService: LoginService) { }
  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl(null)
    })
    if (localStorage.getItem('RememberMe') == 'true') {
      this.signInForm.setValue({
        username: localStorage.getItem('Username'),
        password: localStorage.getItem('Password'),
        rememberMe: localStorage.getItem('RememberMe')
      })
    }
  }

  ngOnDestroy(): void { }

  onLogin() {
    localStorage.removeItem('Username');
    localStorage.removeItem('Password');
    localStorage.removeItem('RememberMe');
    sessionStorage.setItem('token', 'SbzlGl1Vwx1hRIQPAQZB');
    if (this.signInForm.value.rememberMe) {
      localStorage.setItem('Username', this.signInForm.value.username);
      localStorage.setItem('Password', this.signInForm.value.password);
      localStorage.setItem('RememberMe', this.signInForm.value.rememberMe);
    }
    this.loginService.login(this.signInForm.value.username, this.signInForm.value.password)
  }
}
