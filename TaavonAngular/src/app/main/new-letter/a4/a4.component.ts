import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-a4',
  templateUrl: './a4.component.html',
  styleUrls: ['./a4.component.css']
})
export class A4Component implements OnInit {
  @Input() omid: string
  constructor() { }

  ngOnInit() {
  }

}
