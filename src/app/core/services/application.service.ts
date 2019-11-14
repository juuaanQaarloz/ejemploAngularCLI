import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Beneficiary} from '../../models/beneficiary-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Template} from '../../models/template';
import {Field, Occupation, Step} from '../../models';
import {validateEmailConfirmation, validatorsObjects} from '../validators';
import {ModalService} from '../../components/custom-modal';
import {SepomexObj} from '../../models/sepomex-obj';

const URL_IPRE = '../assets/catalogs/catalogs.json';
const URL_CUSTOM_CATALOG = '../assets/catalogs/custom-catalogs.json';
const URL_SEPOMEX = '../assets/catalogs/response-sepomex.json';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private currentStepSource = new BehaviorSubject(0);
  currentValue = this.currentStepSource.asObservable();
  beneficiaries = new BehaviorSubject([]);
  agents = new BehaviorSubject([]);
  formGroup: FormGroup;
  searchModalFrom: string;
  applicationObj;

  constructor(private httpClient: HttpClient,
              private modalService: ModalService) {
  }

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
    } else if (type === 'nextStep') {
      const currentStep = this.currentStepSource.getValue();
      console.log('currentStep1: ', currentStep);

      if (currentStep === 0) {
        this.changeValue(1);
      } else if (currentStep === 1) {
        this.changeValue(2);
      } else if (currentStep === 2) {
        this.changeValue(7);
      } else if (currentStep === 3) {
        this.changeValue(4);
      } else if (currentStep === 4) {
        this.changeValue(7);
      } else if (currentStep === 5) {
        this.changeValue(6);
      } else if (currentStep === 6) {
        this.changeValue(7);
      } else if (currentStep === 7) {
        this.changeValue(0);
      }

      console.log('currentStep2: ', this.currentStepSource.getValue());
    } else if (type === 'validateStep') {
      const currentStep = this.currentStepSource.getValue();
      console.log('onValidateStep currentStep: ', currentStep + 1);
      this.validateFormByStep((currentStep + 1).toString());
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
    return new FormGroup(group, validateEmailConfirmation('email', 'emailConfirmation'));
  }

  addNewFormControl(formGroup: FormGroup, field: Field) {
    formGroup.addControl(field.name, new FormControl(
      field.value || '',
      this.getValidationFunctions(field)));
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

  addItem(newItem, itemType: string) {
    const currentTotalParticipationPercentage = this.getTotalParticipationPercentage(itemType);
    let currentItems;
    let maxLength;
    let responseMessage1;
    let responseMessage2;
    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
      maxLength = 10;
      responseMessage1 = 'No se pueden agregar más de 10 beneficiarios';
      responseMessage2 = 'La suma de las participaciones de los beneficiarios excede el 100%';
    } else if (itemType === 'agent') {
      currentItems = this.agents.getValue();
      maxLength = 2;
      responseMessage1 = 'No se pueden agregar más de 2 agentes';
      responseMessage2 = 'La suma de las participaciones de los agentes excede el 100%';
    }

    if (currentTotalParticipationPercentage + Number(newItem.participationPercentage) <= 100) {
      if (currentItems.length <= maxLength) {
        // the new beneficiary can be added
        currentItems.push(newItem);
        this.setItems(itemType, currentItems);
        return {status: true, message: ''};
      } else {
        return {status: false, message: responseMessage1 };
      }
    } else {
      return {status: false, message: responseMessage2 };
    }
  }

  removeItem(itemId: string, itemType: string) {
    let currentItems;
    let propertyName;
    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
      propertyName = 'beneficiaryId';
    } else if (itemType === 'agent') {
      currentItems = this.agents.getValue();
      propertyName = 'agentId';
    }
    currentItems = currentItems.filter(item => item[propertyName] !== itemId);
    console.log('currentItems: ', currentItems);
    this.setItems(itemType, currentItems);
  }

  getLastItemId(itemType: string) {
    let lastId = 0;
    let currentItems;
    let propertyItem;

    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
      propertyItem = 'beneficiaryId';
    } else if (itemType === 'agent') {
      currentItems = this.agents.getValue();
      propertyItem = 'agentId';
    }
    const itemsLength = currentItems.length;
    console.log('itemsLength: ', itemsLength);

    if (itemsLength >= 1) {
      lastId = Number(currentItems[itemsLength - 1][propertyItem]);
    }
    console.log('lastId: ', lastId);
    return lastId;
  }

  updateItem(updatedItem, itemType) {
    let currentItems;
    let propertyItem;

    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
      propertyItem = 'beneficiaryId';
    } else if (itemType === 'agent') {
      currentItems = this.agents.getValue();
      propertyItem = 'agentId';
    }
    const foundItem = currentItems.filter(i => i[propertyItem] === updatedItem[propertyItem])[0];

    const index = currentItems.findIndex((i) => i[propertyItem] === updatedItem[propertyItem]);

    currentItems[index] = updatedItem;

    this.setItems(itemType, currentItems);
  }

  getTotalParticipationPercentage(itemType: string) {
    let totalParticipationPercentage = 0;
    let currentItems;
    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
    } else if (itemType === 'agent') {
      currentItems. this.agents.getValue();
    }

    currentItems.forEach((item) => {
      totalParticipationPercentage = totalParticipationPercentage + Number(item.participationPercentage);
    });

    return totalParticipationPercentage;
  }

  setItems(itemType: string, newItems) {
    if (itemType === 'beneficiary') {
      this.beneficiaries.next(newItems);
    } else if (itemType === 'agent') {
      this.agents.next(newItems);
    }
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
    const testExp = '((A && B) && C) || D';
    console.log('renderConditions: ', renderConditions);
    // eval && operator first when is no parenthesis
    // eval conditions that are inside parenthesis
  }

  getConditions(renderConditions: string) {
    const result = [];
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
    console.log('valueFormControl: ', valueFormControl);
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
    /*const httpOptions = {
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
      ));*/
    return this.httpClient.get(URL_SEPOMEX)
      .pipe(
        map((response: any) => {
          return response.data.items[0].item as SepomexObj;
        })
      );
  }

  validateFormByStep(stepID: string) {
    let step = this.getStepById(stepID);
    if (step) {
      step.contents.forEach((contentFromStep) => {
        if (contentFromStep.fields) {
          contentFromStep.fields.forEach(field => {
            field.valid = this.formGroup.controls[field.name].valid;
            console.log('formControlName: ', field.name);
            console.log('valid: ', field.valid);
          });
        } else {
          if (contentFromStep.contentChildren) {
            contentFromStep.contentChildren.forEach(contentChild => {
              if (contentChild.fields) {
                contentChild.fields.forEach(field => {
                  field.valid = this.formGroup.controls[field.name].valid;
                  console.log('formControlName: ', field.name);
                  console.log('valid: ', field.valid);
                });
              }
            });
          }
        }
      });
    }
  }

  setApplicationObject(applicationObj: Template) {
    this.applicationObj = applicationObj;
  }

  getApplicationObject() {
    return this.applicationObj;
  }

  getStepById(stepID: string) {
    let foundStep = null;

    this.applicationObj.sections.forEach(section => {
      section.contents.forEach((contentFromSection) => {
        if (contentFromSection.process) {
          contentFromSection.process.steps.forEach(step => {
            if (step.id === stepID) {
              foundStep = step;
            }
          });
        }
      });
    });

    return foundStep;
  }


}
