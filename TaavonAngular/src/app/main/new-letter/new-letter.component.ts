import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.css']
})
export class NewLetterComponent implements OnInit {
  datePickerConfig = {
    format:'jYYYY/jMM/jDD'
  }
  receivers: string[] = ['شرکت شماره 1', 'شرکت شماره 2'];
  selectedDate = moment().locale('fa').format('jYYYY/jMM/jDD');
  hasfile: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  removeBadge(event) {
    for (var i = this.receivers.length - 1; i >= 0; i--) {
      if (this.receivers[i] === event.target.innerText) {
        this.receivers.splice(i, 1);
      }
    }
  }
}
