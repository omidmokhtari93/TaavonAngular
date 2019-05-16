import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() OnUserLogin: EventEmitter<{ userName: string, password: string }> = new EventEmitter <{ userName: string, password: string }>();
  constructor() { }
  username: '';
  password:'';
  ngOnInit() {
  }
  Login() {
    this.OnUserLogin.emit({userName:this.username , password:this.password});
  }
}
