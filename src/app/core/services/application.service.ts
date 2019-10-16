import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BENEFICIARIES} from '../mock/mock-beneficiaries';
import {Beneficiary} from '../../models/beneficiary-model';

const URL_IPRE = '../assets/catalogs/catalogs.json';
const URL_CUSTOM_CATALOG = '../assets/catalogs/custom-catalogs.json';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private currentStepSource = new BehaviorSubject(0);
  currentValue = this.currentStepSource.asObservable();
  beneficiaries = new BehaviorSubject(BENEFICIARIES);

  constructor(private httpClient: HttpClient) { }

  submitFunction(type) {
    console.log(type);
    console.log('pressed...');
  }

  changeValue(newValue: number) {
    this.currentStepSource.next(newValue);
  }

  getIpreCatalogById(id: string): Observable<[]> {
    return this.httpClient.get(URL_IPRE)
      .pipe(
        map((catalog) => {
          return catalog[id];
        })
      );
  }

  getCatalogById(id: string, source: string): Observable<[]> {
    let urlCatalog = '';
    switch (source) {
      case 'IPRE':
        urlCatalog = URL_IPRE;
        break;
      case 'CUSTOM':
        urlCatalog = URL_CUSTOM_CATALOG;
        break;
      default:
        urlCatalog = URL_IPRE;
        break;
    }
    return this.httpClient.get(urlCatalog)
      .pipe(
        map((catalog) => {
          return catalog[id];
        })
      );
  }

  addBeneficiary(newBeneficiary: Beneficiary) {
    let currentBeneficiaries = this.beneficiaries.getValue();
    currentBeneficiaries.push(newBeneficiary);
    this.beneficiaries.next(currentBeneficiaries);
  }

  removeBeneficiary(beneficiaryId: string) {
    let currentBeneficiaries = this.beneficiaries.getValue();
    currentBeneficiaries = currentBeneficiaries.filter(beneficiary => beneficiary.beneficiaryId !== beneficiaryId);
    this.beneficiaries.next(currentBeneficiaries);
  }
}
