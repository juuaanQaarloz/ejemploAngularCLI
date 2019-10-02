import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private currentStepSource = new BehaviorSubject(0);
  currentValue = this.currentStepSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  submitFunction(type) {
    console.log(type);
    console.log('pressed...');
  }

  changeValue(newValue: number) {
    this.currentStepSource.next(newValue);
  }

  getIpreCatalogById(id: string): Observable<[]> {
    return this.httpClient.get('../assets/catalogs/catalogs.json')
      .pipe(
        map((catalog) => {
          return catalog[id];
        })
      );
  }
}
