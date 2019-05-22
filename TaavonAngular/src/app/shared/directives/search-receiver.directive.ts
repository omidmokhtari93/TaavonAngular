import { Directive, HostListener, SimpleChanges } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appSearchReceiver]'
})
export class SearchReceiverDirective implements OnInit {
  @Input('width') width: string;
  @Input('arg') argument: string;
  @Input('id') id: string;
  @Input('text') text: string;
  @Input('placeholder') placeholder: string;
  element: any;
  input: any;
  constructor(private elementRef: ElementRef, private http: Http) {
    this.element = elementRef.nativeElement;
  }
  ngOnInit() {
    this.element.style = 'width:' + this.width + '%;' +
      'background-image: url(../../assets/images/Search_Dark.png); ' +
      'background-repeat: no-repeat; ' +
      'background-position: right 8px top 9px; ' +
      'background-size: 15px;' +
      'padding-right: 30px;' +
      'font-family:sans;'
    this.element.innerHTML = '<input name="search-field" placeholder="' + this.placeholder + '" ' +
      'autocomplete="off" style="width: 100%;border: none;outline: none;height: 100%;direction: rtl;font-family:inherit;"/>';
    this.element.classList.add('form-control');
    this.input = this.element.querySelector('input');
  }
}
