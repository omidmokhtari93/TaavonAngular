import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  editState:Boolean = false;
  name:string='';
  tell:string='';
  email:string='';
  userName:string='';
  password:string='';
  confirmPassword:string='';
  company:number;
  accessLevel:number = 2;
  status:number= 1;
  users:string[] = [];
  hasUser: boolean = false;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('/api/Users').subscribe(res => {
      this.users = res.json() as string[];
      if (this.users.length) {
        this.hasUser = true; 
      }
    })
  }

}
