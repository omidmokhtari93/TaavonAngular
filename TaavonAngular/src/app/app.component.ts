import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private _http: Http , private _route: Router) {}
  ngOnInit() {
    this._route.navigate(['login'])    
  }
}
