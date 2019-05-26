import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() config: any;
  @Output() output = new EventEmitter<any>();
  @ViewChild('parentdiv') parentdiv: any;
  @ViewChild('resultWidth') resultWidth: any;
  placeholder: string = 'جستجو ...';
  width: string = '100%';
  zindex: string = '500';
  searchField: string = '';
  liItems: string[] = [];
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.parentdiv.nativeElement.contains(event.target)) {
      return;
    } else {
      this.liItems = [];
      this.searchField = '';
    }
  }
  constructor(private http: Http) { }

  ngOnInit() {
    if (!this.config.length) {
      this.width = this.config.width;
      this.placeholder = this.config.placeholder;
      this.zindex = this.config.zindex;
    }
  }
  ngAfterViewInit() {
    this.resultWidth.nativeElement.style.width = (this.parentdiv.nativeElement.clientWidth + 2) + 'px';
  }
  search() {
    if (this.searchField.length < 2 || this.isEmpty(this.searchField)) {
      this.liItems = [];
      return;
    }
    this.http.get(this.config.api, { params: { company: this.searchField } }).subscribe(e => {
      this.liItems = e.json() as string[];
    })
  }

  isEmpty(input) {
    return !(input.replace(/\s/g, "").length > 0);
  }

  addItem(itemid, itemname) {
    this.output.emit({ id: itemid, text: itemname });
  }
}
