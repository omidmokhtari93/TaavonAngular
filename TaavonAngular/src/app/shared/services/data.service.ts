import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  //defaultConfig: { palceholder: 'جستجو ...', width: '100%' }
  private configData = new BehaviorSubject<any>(null);
  getConfig = this.configData.asObservable();
  private data = new BehaviorSubject<any>(null);
  getData = this.data.asObservable();
  constructor() { }

  setConfig(data: any) {
    this.configData.next(data);
  }

  setData(data: any) {
    this.data.next(data);
  }
}
