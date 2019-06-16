import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-received-letter',
  templateUrl: './received-letter.component.html',
  styleUrls: ['./received-letter.component.css']
})
export class ReceivedLetterComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    const obs = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('one');
      }, 2000)
      setTimeout(() => {
        observer.error('error');
      }, 4000)
      setTimeout(() => {
        observer.complete();
      }, 6000)
    });

    obs.subscribe(
      (data: string) => {
        console.log(data);
      }),
      (error) => {
        console.log(error);
      },
      () => {
        console.log('success');
      }
  }

}
