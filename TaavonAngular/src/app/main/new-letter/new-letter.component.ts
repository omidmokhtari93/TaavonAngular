import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.css']
})
export class NewLetterComponent implements OnInit {
  datePickerConfig = {
    format: 'jYYYY/jMM/jDD'
  }
  selectedDate = moment().locale('fa').format('jYYYY/jMM/jDD');
  letterSubject:string ='';
  receivers: string[] = [];
  sender: string = '';
  replica: string[] = [];
  replicaText: string = '';
  needResponse: boolean = false;
  letterSize: boolean = true;
  letterType: number = 0;
  responseTime: number;
  responseType: number = 1;
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
  removeReplicaBadge(event) {
    for (var i = this.replica.length - 1; i >= 0; i--) {
      if (this.replica[i] === event.target.innerText) {
        this.replica.splice(i, 1);
      }
    }
  }
}
