import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'jalali-moment';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
declare var $: any;

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
  letterSubject: string = '';
  receivers: string[] = ['شرکت شماره1'];
  receiverDropDown:string[] = [];
  sender: string = '';
  replica: string[] = [];
  replicaText: string = '';
  needResponse: boolean = false;
  letterSize: boolean = true;
  letterType: number = 0;
  responseTime: number;
  responseType: number = 1;
  hasfile: boolean = false;
  private readonly notifier: NotifierService;
  constructor(private route: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
  }
  
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
  createLetter() {
    if (this.letterSubject === '') {
      this.notifier.notify('error', 'لطفا عنوان نامه را مشخص  کنید');
      return;
    }
    if (!this.receivers.length) {
      this.notifier.notify('error', 'لطفا گیرنده نامه را مشخص  کنید');
      return;
    }
    this.route.navigate(["main/new/A5"])
    $('#letter-modal').modal('show');
  }
}
