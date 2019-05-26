import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
declare var $: any;
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.css']
})
export class NewLetterComponent implements OnInit {
  public Editor = ClassicEditor;
  editConfig = {
    fontFamily: {
      options: [
        'default',
        'Ubuntu, Arial, sans-serif',
        'Ubuntu Mono, Courier New, Courier, monospace'
      ]
    },
    toolbar: ['heading', 'bulletedList', 'numberedList', 'fontFamily', 'undo', 'redo']
  }
  receiverConfig = {
    placeholder: 'جستجوی شرکت ...',
    width: '100%',
    api: '/api/SearchCompany',
    zindex: '600'
  }
  replicaConfig = {
    placeholder: 'رونوشت به ...',
    width: '100%',
    api: '/api/SearchCompany',
    zindex: '500'
  }
  datePickerConfig = {
    format: 'jYYYY/jMM/jDD'
  }
  placeholder = 'جستجوی شرکت ...';
  selectedDate = moment().locale('fa').format('jYYYY/jMM/jDD');
  letterSubject: string = '';
  receivers = [];
  sender: string = '';
  replica = [];
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

  ngOnInit() {}

  createCompanyList(items: any) {
    if (this.receivers.find(x => x.id == items.id) == undefined) {
      this.receivers.push({ id: items.id, text: items.text })
    }
  }

  createReplicaList(rep: any) {
    if (this.replica.find(x => x.id == rep.id) == undefined) {
      this.replica.push({ id: rep.id, text: rep.text })
    }
  }

  removeBadge(id) {
    this.receivers.forEach((item, index) => {
      if (item.id == id) this.receivers.splice(index, 1);
    });
  }
  removeReplicaBadge(id) {
    this.replica.forEach((item, index) => {
      if (item.id == id) this.replica.splice(index, 1);
    });
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
