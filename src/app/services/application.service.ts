import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  submitFunction(type) {
    console.log(type);
    console.log('pressed...');
  }
}
