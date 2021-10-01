import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ShareDataService {

  // SharingData = new Subject();
  SharingData = new BehaviorSubject('hai');
  
  constructor() { }

}