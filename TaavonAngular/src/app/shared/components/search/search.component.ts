import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('parentdiv') parentdiv: any;
  @ViewChild('resultWidth') resultWidth: any;
  placeholder: string = 'جستجو ...';
  width: string = '100%';
  searchField: string = '';
  liItems: string[] = [];
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.parentdiv.nativeElement.contains(event.target)) {
      return;
    } else {
      this.liItems = [];
    }
  }
  constructor(private searchConfig: DataService, private http: Http, private sendData: DataService) { }

  ngOnInit() {
    this.searchConfig.getConfig.subscribe(e => {
      this.placeholder = e.placeholder;
      this.width = e.width;
    })
  }
  ngAfterViewInit() {
    this.resultWidth.nativeElement.style.width = (this.parentdiv.nativeElement.clientWidth + 2) + 'px';
  }
  search() {
    if (this.searchField.length < 2 || this.isEmpty(this.searchField)) {
      this.liItems = [];
      return;
    }
    this.http.get('/api/SearchCompany', { params: { company: this.searchField } }).subscribe(e => {
      this.liItems = e.json() as string[];
    })
  }

  isEmpty(input) {
    return !(input.replace(/\s/g, "").length > 0);
  }

  addItem(itemid , itemname) {
    this.sendData.setData({itemid : itemid , itemname : itemname});
  }
}
