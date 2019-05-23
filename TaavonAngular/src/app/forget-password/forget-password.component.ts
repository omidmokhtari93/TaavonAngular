import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private searchConfig: DataService) { }
  ngOnInit() {
    this.searchConfig.setConfig({ placeholder: 'جستجوی شرکت ...', width: '80%' });
  }
}
