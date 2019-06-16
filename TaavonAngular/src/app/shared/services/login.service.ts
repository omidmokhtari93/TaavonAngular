import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { SlimLoadingBarService } from "@cime/ngx-slim-loading-bar";

@Injectable()
export class LoginService {
  private readonly notifier: NotifierService;
  constructor(private http: Http,
    private route: Router,
    notifierService: NotifierService,
    private slimLoadingBarService: SlimLoadingBarService) {
    this.notifier = notifierService;
  }

  login(username: string, password: string) {
    this.slimLoadingBarService.start();
    this.http.get('/api/login', { params: { Username: username, Password: password } }).subscribe(res => {
      if (res.json().status == true) {
        this.route.navigate(['main'])
      } else {
        this.notifier.notify('error', res.json().message);
      }
      this.slimLoadingBarService.complete();
    }, (er) => {
        this.notifier.notify('error', '.خطا !! اتصال اینترنت خود را بررسی نمایید');
        this.slimLoadingBarService.complete();
    })
  }
}

