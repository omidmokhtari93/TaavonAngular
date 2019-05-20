import { Directive, ElementRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Directive({
  selector: '[appLetterNumber]'
})
export class LetterNumberDirective implements OnInit {

  constructor(private elementRef: ElementRef, private http: Http) { }
  ngOnInit() {
    this.http.get('/api/LetterNumber').subscribe(res => {
      this.elementRef.nativeElement.value = res.json();
    })
  }
}
