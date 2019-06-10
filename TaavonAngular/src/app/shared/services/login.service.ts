import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";

@Injectable()
export class LoginService {
  private readonly notifier: NotifierService;
  constructor(private http: Http, private route: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  login(username: string, password: string) {
    this.http.get('/api/login', { params: { Username: username, Password: password } }).subscribe(res => {
      if (res.json().status == true) {
        this.route.navigate(['main'])
      } else {
        this.notifier.notify('error', res.json().message);
      }
    })
  }
}

