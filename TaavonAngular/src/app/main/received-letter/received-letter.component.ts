import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-received-letter',
  templateUrl: './received-letter.component.html',
  styleUrls: ['./received-letter.component.css']
})
export class ReceivedLetterComponent implements OnInit {

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.data.next('somthing like this');
  }
}
