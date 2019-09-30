import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private currentStepSource = new BehaviorSubject(0);
  currentValue = this.currentStepSource.asObservable();

  constructor() { }

  submitFunction(type) {
    console.log(type);
    console.log('pressed...');
  }

  changeValue(newValue: number) {
    this.currentStepSource.next(newValue);
  }
}
