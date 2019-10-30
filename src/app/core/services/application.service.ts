import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BENEFICIARIES} from '../mock/mock-beneficiaries';
import {Beneficiary} from '../../models/beneficiary-model';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Template} from '../../models/template';
import {Field, Occupation} from '../../models';
import {validatorsObjects} from '../validators';
import {ModalService} from '../../components/custom-modal';
import {SepomexObj} from '../../models/sepomex-obj';

const URL_IPRE = '../assets/catalogs/catalogs.json';
const URL_CUSTOM_CATALOG = '../assets/catalogs/custom-catalogs.json';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private currentStepSource = new BehaviorSubject(0);
  currentValue = this.currentStepSource.asObservable();
  beneficiaries = new BehaviorSubject(BENEFICIARIES);
  formGroup: FormGroup;
  searchModalFrom: string;

  constructor(private httpClient: HttpClient,
              private modalService: ModalService) {}

  submitFunction(type) {
    console.log(type);
    if (type === 'searchOccupation') {
      this.searchModalFrom = 'contractor';
      this.openOccupationModal('modal-search');
      console.log('searchModalFrom A: ', this.searchModalFrom);
    } else if (type === 'searchOccupationS') {
      this.searchModalFrom = 'applicant';
      this.openOccupationModal('modal-search');
      console.log('searchModalFrom B: ', this.searchModalFrom);
    }
  }

  openOccupationModal(modalID: string) {
    this.modalService.open(modalID);
  }

  changeValue(newValue: number) {
    this.currentStepSource.next(newValue);
  }

  toFormGroup(applicationObj: Template) {
    const group: any = {};
    applicationObj.sections.forEach(section => {
      section.contents.forEach((contentFromSection) => {
        if (contentFromSection.fields) {
          contentFromSection.fields.forEach(field => {
            group[field.name] = new FormControl(
              field.value || '',
              this.getValidationFunctions(field));
          });
        } else {
          if (contentFromSection.process) {
            contentFromSection.process.steps.forEach(step => {
              step.contents.forEach((contentFromStep) => {
                if (contentFromStep.fields) {
                  contentFromStep.fields.forEach(field => {
                    group[field.name] = new FormControl(
                      field.value || '',
                      this.getValidationFunctions(field));
                  });
                } else {
                  if (contentFromStep.contentChildren) {
                    contentFromStep.contentChildren.forEach(contentChild => {
                      if (contentChild.fields) {
                        contentChild.fields.forEach(field => {
                          group[field.name] = new FormControl(
                            field.value || '',
                            this.getValidationFunctions(field));
                        });
                      }
                    });
                  }
                }
              });
            });
          }
        }
      });

    });
    return new FormGroup(group);
  }

  checkDisable(field: Field) {
    if (field.disable) {
      return true;
    } else {
      return false;
    }
  }

  getValidationFunctions(field: Field): any[] {
    let validationFunctions = [];
    validatorsObjects.forEach(validationObject => {
      if (validationObject.nameField === field.name) {
        // console.log('validationObject: ', validationObject);
        validationFunctions = validationObject.validationFunctions;
      }
    });
    if (field.required) {
      validationFunctions.push(Validators.required);
    }
    if (field.maxValue) {
      validationFunctions.push(Validators.maxLength(field.maxValue));
    }
    // console.log('validationFuntions: ', validationFunctions);
    return validationFunctions;
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
    let currentTotalParticipationPercentage = this.getTotalParticipationPercentage();
    if (currentTotalParticipationPercentage + Number(newBeneficiary.participationPercentage) <= 100) {
      let currentBeneficiaries = this.beneficiaries.getValue();
      if (currentBeneficiaries.length <= 10) {
        // the new beneficiary can be added
        currentBeneficiaries.push(newBeneficiary);
        this.beneficiaries.next(currentBeneficiaries);
        return {status: true, message: ''};
      } else {
        return {status: false, message: 'No se pueden agregar más de 10 beneficiarios'};
      }
    } else {
      return {status: false, message: 'La suma de las participaciones de los beneficiarios excede el 100%'};
    }
  }

  removeBeneficiary(beneficiaryId: string) {
    let currentBeneficiaries = this.beneficiaries.getValue();
    currentBeneficiaries = currentBeneficiaries.filter(beneficiary => beneficiary.beneficiaryId !== beneficiaryId);
    this.beneficiaries.next(currentBeneficiaries);
  }

  getLastBeneficiaryId() {
    let currentBeneficiaries = this.beneficiaries.getValue();
    const beneficiariesLength = currentBeneficiaries.length;
    let lastId = 0;
    if (beneficiariesLength > 1) {
      lastId = Number(currentBeneficiaries[beneficiariesLength - 1].beneficiaryId);
    }
    console.log('lastId: ', lastId);
    return lastId;
  }

  updateBeneficiary(updatedBeneficiary: Beneficiary) {
    let currentBeneficiaries = this.beneficiaries.getValue();
    let findedBeneficiary = currentBeneficiaries.filter(b => b.beneficiaryId === updatedBeneficiary.beneficiaryId)[0];
    console.log('findedBeneficiary: ', findedBeneficiary);

    const index = currentBeneficiaries.findIndex((b) => b.beneficiaryId === updatedBeneficiary.beneficiaryId);

    console.log('index: ', index);

    currentBeneficiaries[index] = updatedBeneficiary;

    console.log('updated Beneficiaries: ', currentBeneficiaries);

    this.beneficiaries.next(currentBeneficiaries);
  }

  getTotalParticipationPercentage() {
    const currentBeneficiaries = this.beneficiaries.getValue();
    let totalParticipationPercentage = 0;
    currentBeneficiaries.forEach((beneficiary) => {
      totalParticipationPercentage =  totalParticipationPercentage + Number(beneficiary.participationPercentage);
    });
    return totalParticipationPercentage;
  }

  setFormGroup(form: FormGroup) {
    this.formGroup = form;
  }

  getFormGroup() {
    return this.formGroup;
  }

  getFormControlValueByName(formGroup: FormGroup, formControlName: string) {
    const value = formGroup.get(formControlName).value;
    // console.log(`value of ${formControlName} : ${value} from step ${stepId}`);
    return value;
  }

  booleanCalculator(renderConditions: string) {
    let testExp = '((A && B) && C) || D';
    console.log('renderConditions: ', renderConditions);
    // eval && operator first when is no parenthesis
    // eval conditions that are inside parenthesis
  }

  getConditions(renderConditions: string) {
    let result = [];
    let separatedRenderConditions = [];

    separatedRenderConditions = renderConditions.split(',');

    separatedRenderConditions.forEach((condition: string) => {
      const reExp = '^(.*?)([!<>=|]=?)(.*?)$'; // regular expresion for logic operators
      const res = condition.match(reExp);
      // console.log('res: ', res);
      if (res !== null) {
        // res[1] --variableName
        // res[2] --simbolCondition
        // res[3] --valueCondition
        result.push(res);
      }
    });

    return result;
  }

  evaluateCondition(formGroup: FormGroup, elementsCondition) {
    const valueFormControl = this.getFormControlValueByName(formGroup, elementsCondition[1]);
    let result: boolean;

    switch (elementsCondition[2]) {
      case '=':
        if (elementsCondition[3] === 'false') {
          if (valueFormControl === false) {
            result = true;
          }
        } else if (elementsCondition[3] === 'true') {
          if (valueFormControl === true) {
            result = true;
          }
        } else {
          if (valueFormControl === elementsCondition[3]) {
            // console.log('case = ', elementsCondition[3]);
            result = true;
          }
        }
        break;

      case '<':
        if (valueFormControl < elementsCondition[3]) {
          result = true;
        }
        break;
      case '>':
        if (valueFormControl > elementsCondition[3]) {
          result = true;
        }
        break;
      case '<=':
        if (valueFormControl <= elementsCondition[3]) {
          result = true;
        }
        break;
      case '>=':
        if (valueFormControl >= elementsCondition[3]) {
          result = true;
        }
        break;
      case '!=':
        if (valueFormControl !== elementsCondition[3]) {
          result = true;
        }
        break;
      default:
        result = false;
        break;
    }

    return result;
  }

  createNewFormGroup(fields: Field[]): FormGroup {
    const group: any = {};
    fields.forEach((field) => {
      group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
    });
    return new FormGroup(group);
  }

  determinateEvenOrOdd(num: number): boolean {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  setSelectedOccupation(selectedOccupation: Occupation) {
    console.log('searchModalFrom: ', this.searchModalFrom);
    let formControlName;
    let htmlID;
    if (this.searchModalFrom === 'contractor') {
      formControlName = 'occupation';
      htmlID = 'txtOccupation';

    } else if (this.searchModalFrom === 'applicant') {
      formControlName = 'occupationS';
      htmlID = 'txtOccupationS';
    }
    this.formGroup.controls[formControlName].setValue(selectedOccupation.specificOccupationName);
    const ele = document.getElementById(htmlID);
    ele.setAttribute('value', selectedOccupation.specificOccupationName);
  }

  getInfoFromSepomex(zipCode: string): Observable<SepomexObj> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const url = 'https://dev.des.metlife.com/des/ipreservices/sepomex/' + zipCode;
    return this.httpClient.get(url)
      .pipe(
        map((response: any) => {
          return response.data.items[0].item as SepomexObj;
        }
      ));
  }
}
