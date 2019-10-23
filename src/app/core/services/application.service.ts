import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BENEFICIARIES} from '../mock/mock-beneficiaries';
import {Beneficiary} from '../../models/beneficiary-model';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Template} from '../../models/template';
import {Field} from '../../models';
import {validatorsObjects} from '../validators';

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

  constructor(private httpClient: HttpClient) {}

  submitFunction(type) {
    console.log(type);
    console.log('pressed...');
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
            group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
          });
        } else {
          if (contentFromSection.process) {
            contentFromSection.process.steps.forEach(step => {
              step.contents.forEach((contentFromStep) => {
                if (contentFromStep.fields) {
                  contentFromStep.fields.forEach(field => {
                    group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
                  });
                } else {
                  if (contentFromStep.contentChildren) {
                    contentFromStep.contentChildren.forEach(contentChild => {
                      if (contentChild.fields) {
                        contentChild.fields.forEach(field => {
                          group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
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
    let currentBeneficiaries = this.beneficiaries.getValue();
    currentBeneficiaries.push(newBeneficiary);
    this.beneficiaries.next(currentBeneficiaries);
  }

  removeBeneficiary(beneficiaryId: string) {
    let currentBeneficiaries = this.beneficiaries.getValue();
    currentBeneficiaries = currentBeneficiaries.filter(beneficiary => beneficiary.beneficiaryId !== beneficiaryId);
    this.beneficiaries.next(currentBeneficiaries);
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

  getRenderConditions(renderConditions: string) {
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

  evaluateRenderCondition(formGroup: FormGroup, elementsCondition) {
    const valueFormControl = this.getFormControlValueByName(formGroup, elementsCondition[1]);
    let result = false;

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
      group[field.name] = new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
