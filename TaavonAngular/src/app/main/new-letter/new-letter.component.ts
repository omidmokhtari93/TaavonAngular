import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.css']
})
export class NewLetterComponent implements OnInit {
  selectedDate = moment().locale('fa');
  constructor() { }

  ngOnInit() {
  }

}
