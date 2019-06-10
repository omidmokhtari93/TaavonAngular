import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from '@cime/ngx-slim-loading-bar';

@Component({
  selector: 'app-received-letter',
  templateUrl: './received-letter.component.html',
  styleUrls: ['./received-letter.component.css']
})
export class ReceivedLetterComponent implements OnInit {

  constructor(private slimLoadingBarService: SlimLoadingBarService) { }

  startLoading() {
    this.slimLoadingBarService.start(res => {
      console.log(res);
    });
  }

  stopLoading() {
    this.slimLoadingBarService.stop();
  }

  completeLoading() {
    this.slimLoadingBarService.complete();
  }

  ngOnInit() {
  }

}
