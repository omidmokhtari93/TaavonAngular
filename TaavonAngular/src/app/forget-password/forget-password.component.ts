import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  fc: string = 'form-control';
  exp: boolean = true;
  isDisabled: boolean = false;
  formControl: string = 'form-control';
  bgLight: string = 'bg-light';
  username:string = 'omid';  
  constructor() { }

  ngOnInit() {
    
  }
  Callphone(p) {
    console.log(p);
  }
}
