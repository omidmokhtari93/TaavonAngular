import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private _http: Http,
    private _route: Router,
    private dataService: DataService) { }
  ngOnInit() {
    this.loadScript();
  }
  logoutUser() {
    this._http.get('/api/logout').subscribe(res => {
      this._route.navigate(['login']);
    });
  }

  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/js/main-script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
