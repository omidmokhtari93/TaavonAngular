import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() place: string;
  constructor() { }

  ngOnInit() {
    console.log(this.placeholder);
    console.log(this.place);
  }

}
