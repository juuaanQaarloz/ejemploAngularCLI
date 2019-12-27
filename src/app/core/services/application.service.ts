import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Template} from '../../models/template';
import {Beneficiary, Formatwo, Field, Occupation, Step} from '../../models';
import {Agent} from '../../models/agent-model/agent';
import {
  equalEmailsValidator,
  higherAssuredImport,
  validateSameName,
  validateSameName2,
  validatorsObjects,
  validateFunds,
  validateSameName4,
  validateSameName3
} from '../validators';
import {ModalService} from '../../components/custom-modal';
import {SepomexObj} from '../../models/sepomex-obj';
import {COVERAGES} from '../mock/coverage/coverage';
import {BENEFICIARIES} from '../mock/mock-beneficiaries/mock-beneficiaries';
import {placeholdersToParams} from '@angular/compiler/src/render3/view/i18n/util';
import {error} from 'util';
import {isPackageNameSafeForAnalytics} from '@angular/cli/models/analytics';

const URL_IPRE = '../assets/catalogs/catalogs.json';
const URL_CUSTOM_CATALOG = '../assets/catalogs/custom-catalogs.json';
const URL_PATTERN_CATALOG = '../assets/catalogs/pattern-catalogs.json';
const URL_SEPOMEX = '../assets/catalogs/response-sepomex.json';
const URL_AGENT_CATALOG = '../assets/catalogs/agents-catalogs.json';

// Generic Catalog
const URL_CAT_ADDRESS_TYPE = '../assets/catalogs/address-type.json';
const URL_CAT_BANK_BIENES = '../assets/catalogs/bank-bienes.json';
const URL_CAT_BLOQ_RET_COBERT = '../assets/catalogs/bloqueo-retenedores-cobertura.json';
const URL_CAT_COLLECTION_CHANEL = '../assets/catalogs/collection-channel.json';
const URL_CAT_CONCEPT_RET = '../assets/catalogs/concepto-ret.json';
const URL_CAT_COUNTRY = '../assets/catalogs/country.json';
const URL_CAT_ENGINE_VARIABLE = '../assets/catalogs/engine-variables.json';
const URL_CAT_FEDERAL_ENTITY = '../assets/catalogs/federal-entity.json';
const URL_CAT_GENDER = '../assets/catalogs/gender.json';
const URL_CAT_LABORAL_REGIMEN = '../assets/catalogs/laboral-regimen.json';
const URL_CAT_LIQUIDATION_TYPE = '../assets/catalogs/liquidation-type.json';
const URL_CAT_MARITAL_STATUS = '../assets/catalogs/marital-status.json';
const URL_CAT_MAX_COVERAGE = '../assets/catalogs/max-coverage.json';
const URL_CAT_MAX_OCCUPATION = '../assets/catalogs/max-occupation.json';
const URL_CAT_MAXIMUM_SA = '../assets/catalogs/maximum-sa.json';
const URL_CAT_OCCUPATION = '../assets/catalogs/occupation.json';
const URL_CAT_PAYMENT_MODE = '../assets/catalogs/payment-mode.json';
const URL_CAT_PLAN = '../assets/catalogs/plan.json';
const URL_CAT_PLAN_COVERAGE_PROVIDA = '../assets/catalogs/plan-coverage-provida.json';
const URL_CAT_PREFERRED_CONTACT_DAY = '../assets/catalogs/preferred-contact-day.json';
const URL_CAT_PREFERRED_CONTACT_TIME = '../assets/catalogs/preferred-contact-time.json';
const URL_CAT_PREFERRED_CONTACT_TYPE = '../assets/catalogs/preferred-contact-type.json';
const URL_CAT_PROMOTORIA = '../assets/catalogs/promotoria.json';
const URL_CAT_RELATIONSHIP = '../assets/catalogs/ralationship.json';
const URL_CAT_RELATIONSHIP_COVERAGE = '../assets/catalogs/relationship-coverage.json';
const URL_CAT_RETENEDOR = '../assets/catalogs/retenedor.json';
const URL_CAT_SUB_IDENTIFICATION_TYPE = '../assets/catalogs/sub-identification-type.json';
const URL_CAT_GUARD_BOX_OPTIONS = '../assets/catalogs/guard-box-options.json';



@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private currentStepSource = new BehaviorSubject(1);
  currentValue = this.currentStepSource.asObservable();
  beneficiaries = new BehaviorSubject([]);
  agents = new BehaviorSubject([]);
  sports = new BehaviorSubject([]);
  diseases = new BehaviorSubject([]);
  diseases2 = new BehaviorSubject([]);
  diseases3 = new BehaviorSubject([]);

  formatosdos = new BehaviorSubject([]);
  formatosdosb = new BehaviorSubject([]);
  formatosocho = new BehaviorSubject([]);
  formatos426 = new BehaviorSubject([]);
  formatos427 = new BehaviorSubject([]);
  countries = new BehaviorSubject([]);
  payments = new BehaviorSubject([]);
  coverages = new BehaviorSubject(COVERAGES);
  formGroup: FormGroup;
  searchModalFrom: string;
  applicationObj;

  constructor(private httpClient: HttpClient,
              private modalService: ModalService) {
    // localStorage.setItem( 'userId', '1');
  }

  getErrorMsg() {
    return 'Error desde Servicio';
  }

  submitFunction(type) {
    console.log(type);
    console.log(this.formGroup);
    if (type === 'searchOccupation') {
      this.searchModalFrom = 'contractor';
      this.openOccupationModal('modal-search');
      // console.log('searchModalFrom A: ', this.searchModalFrom);
    } else if (type === 'searchOccupationS') {
      this.searchModalFrom = 'applicant';
      this.openOccupationModal('modal-search');
      // console.log('searchModalFrom B: ', this.searchModalFrom);
    } else if (type === 'nextStep') {
      const currentStep = this.currentStepSource.getValue();
      console.log('currentStep: ', currentStep);

      let contractorType = this.formGroup.controls['contractorType'].value;
      if (currentStep === 0) {
        this.changeValue(1);
      } else if (currentStep === 1) {
        this.changeValue(2);
      } else if (currentStep === 2) {
        this.changeValue(3);
      } else if (currentStep === 3 && contractorType) {
        this.changeValue(10);
      } else if (currentStep === 3 && !contractorType) {
        this.changeValue(7);
      } else if (currentStep === 4) {
        this.changeValue(5);
      } else if (currentStep === 5) {
        this.changeValue(6);
      } else if (currentStep === 6) {
        this.changeValue(7);
      } else if (currentStep === 7) {
        this.changeValue(8);
      } else if (currentStep === 8) {
        this.changeValue(9);
      } else if (currentStep === 9) {
        this.changeValue(10);
      } else if (currentStep === 10) {
        this.changeValue(11);
      } else if (currentStep === 11) {
        this.changeValue(12);
      } else if (currentStep === 12) {
        this.changeValue(13);
      } else if (currentStep === 13) {
        this.changeValue(14);
      } else if (currentStep === 14) {
        this.changeValue(15);
      } else if (currentStep === 15) {
        this.changeValue(16);
      } else if (currentStep === 16) {
        this.changeValue(17);
      } else if (currentStep === 17) {
        this.changeValue(18);
      } else if (currentStep === 18) {
        this.changeValue(19);
      } else if (currentStep === 19) {
        this.changeValue(20);
      } else if (currentStep === 20) {
        // aqui validacion
        this.changeValue(21);
      } else if (currentStep === 21) {
        this.changeValue(22);
      }

      // console.log('currentStep2: ', this.currentStepSource.getValue());
    } /*else if (type === 'validateStep') {
      const currentStep = this.currentStepSource.getValue(); // .getValue();
      // console.log('onValidateStep currentStep: ', currentStep);
      // console.log('onValidateStep currentStep: ', currentStep + 1);
      this.validateFormByStep((currentStep + 1).toString());
    }*/
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
    // tslint:disable-next-line:max-line-length
    return new FormGroup(group, [equalEmailsValidator, higherAssuredImport, validateFunds, validateSameName, validateSameName2, validateSameName3 ]);
  }

  toFormGroupReadOnly(applicationObj: Template) {
    const group: any = {};
    applicationObj.sections.forEach(section => {
      section.contents.forEach((contentFromSection) => {
        if (contentFromSection.fields) {
          contentFromSection.fields.forEach(field => {
            field.disable = true;
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
                    field.disable = true;
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
    return new FormGroup(group, [equalEmailsValidator, higherAssuredImport, validateFunds]);
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

  getValidationFunctions2(field: Field): any[] {
    let validationFunctions = [];

    if (field.required) {
      validationFunctions.push(Validators.required);

      validatorsObjects.forEach(validationObject => {
        if (validationObject.nameField === field.name) {
          // // console.log('validationObject: ', validationObject);
          validationFunctions = validationObject.validationFunctions;
        }
      });

      if (field.maxValue) {
        validationFunctions.push(Validators.maxLength(field.maxValue));
      }
    }

    return validationFunctions;
  }

  getValidationFunctions(field: Field): any[] {
    let validationFunctions = [];

    if (field.required) {
      validationFunctions.push(Validators.required);

      validatorsObjects.forEach(validationObject => {
        if (validationObject.nameField === field.name) {
          if (validationObject.validationFunctions) {
            validationObject.validationFunctions.forEach((valFunc) => {
              validationFunctions.push(valFunc);
            });
          }
        }
      });

      if (field.maxValue) {
        validationFunctions.push(Validators.maxLength(field.maxValue));
      }
      /*if (field.pattern) {
        console.log('setting pattern validator: ', field.pattern);
        validationFunctions.push((Validators.pattern(field.pattern)));
      }*/
    } else {
      validationFunctions = [];
    }
    return validationFunctions;
  }

  // getCatalogById(this.fieldObj.sourceID, this.fieldObj.source)
  getCatalogById(id: string, source: string): Observable<[]> {
    if (source !== 'IPRE') {
      console.log('Catalogos que no son IPRE');
      let urlCatalog = '';
      switch (source) {
        /*case 'IPRE':
          urlCatalog = URL_IPRE;
         break;*/
        case 'CUSTOM':
          urlCatalog = URL_CUSTOM_CATALOG;
          break;
        case 'PATTERN':
          urlCatalog = URL_PATTERN_CATALOG;
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
    } else {
      console.log('Catalogos IPRE');
      return this.getCatalog(id, source);
    }
  }

  addItem(newItem, itemType: string, idTable?: string) {
    let currentTotalParticipationPercentage;
    let currentItems;
    let maxLength;
    let responseMessage1;
    let responseMessage2;
    let responseMessage3;
    let responseMessage4;
    let propertyName;
    if (itemType === 'beneficiary') {
      currentTotalParticipationPercentage = this.getTotalParticipationPercentage(itemType);
      currentItems = this.beneficiaries.getValue();
      maxLength = 10;
      responseMessage1 = 'No se pueden agregar más de 10 beneficiarios';
      responseMessage2 = 'La suma de las participaciones de los beneficiarios excede el 100%';
      responseMessage3 = 'El porcentaje de participacion debe de ser mayor a 0';
      responseMessage4 = 'La suma de los porcentajes de participación debe ser igual a 100%';
      propertyName = 'participationPercentage';
    } else if (itemType === 'agent') {
      currentTotalParticipationPercentage = this.getTotalParticipationPercentage(itemType);

      console.log('currentTotalParticipationPercentage: ');
      console.log(currentTotalParticipationPercentage);

      currentItems = this.agents.getValue();
      maxLength = 2;
      responseMessage1 = 'No se pueden agregar más de 2 agentes';
      responseMessage2 = 'La suma de las participaciones de los agentes excede el 100%';
      responseMessage3 = 'El porcentaje de participacion debe de ser mayor a 0';
      responseMessage4 = 'La suma de los porcentajes de participación debe ser igual a 100%';
      propertyName = 'participation';
    } else if (itemType === 'formatwo') {
      currentTotalParticipationPercentage = 1;
      currentItems = this.formatosdos.getValue();
      maxLength = 5;
      responseMessage1 = 'No se pueden agregar más de 5 formatos';
      responseMessage2 = 'Validacion2';
      propertyName = 'participation';
    } else if (itemType === 'country') {
      // currentTotalParticipationPercentage = 1; // i commented this line cuz not apply for countries
      currentItems = this.countries.getValue();
      maxLength = 3;
      responseMessage1 = 'No se pueden agregar más de 3 ';
      // responseMessage2 = 'Validacion2'; // i commented this line cuz not apply for countries
      // propertyName = 'participation'; // i commented this line cuz not apply for countries
    } else if (itemType === 'payment') {
      // currentTotalParticipationPercentage = 1; // i commented this line cuz not apply for countries
      currentItems = this.payments.getValue();
      maxLength = 5;
      responseMessage1 = 'No se pueden agregar más de 5 instrumentos bancarios';
      // responseMessage2 = 'Validacion2'; // i commented this line cuz not apply for countries
      // propertyName = 'paymentId'; // i commented this line cuz not apply for countries

      console.log('AMPI AddItem');
      console.log(currentItems);

    } else if (itemType === 'disease') {
      if (idTable === '1') {
        currentItems = this.diseases.getValue();
        maxLength = 10;
        responseMessage1 = 'No se pueden agregar más de 10 enfermedades / padecimientos';
      } else if (idTable === '2') {
        currentItems = this.diseases2.getValue();
        maxLength = 10;
        responseMessage1 = 'No se pueden agregar más de 10 enfermedades / padecimientos';
      } else if (idTable === '3') {
        currentItems = this.diseases3.getValue();
        maxLength = 10;
        responseMessage1 = 'No se pueden agregar más de 10 enfermedades / padecimientos';
      }
    } else if (itemType === 'sport') {
      currentItems = this.sports.getValue();
      maxLength = 5;
      responseMessage1 = 'No se pueden agregar más de 5 deportes / actividades';
    } else if (itemType === 'document') {
      // currentItems = this.documents.getValue();
      console.log('currentItems');
      console.log(currentItems);
    }

    if (currentTotalParticipationPercentage !== undefined) {
      console.log(1);
      // when is a max participation limit
      if (currentTotalParticipationPercentage + Number(newItem[propertyName]) <= 100) {
        console.log(2);
        // when is a maxItems limit
        if (currentItems.length <= maxLength -1) {
          console.log(3);
          // the new item can be added
          if (Number(newItem[propertyName]) > 0) {
            console.log(4);
            if ( currentItems.length === maxLength -1 ) {
              if ( currentTotalParticipationPercentage + Number(newItem[propertyName]) === 100) {
                currentItems.push(newItem);
                if (idTable) {
                  this.setItems(itemType, currentItems, idTable);
                } else {
                  this.setItems(itemType, currentItems);
                }
                return {status: true, message: ''};
              } else {
                console.log(8);
                return {status: false, message: responseMessage4};
              }
            } else {
              currentItems.push(newItem);
              if (idTable) {
                this.setItems(itemType, currentItems, idTable);
              } else {
                this.setItems(itemType, currentItems);
              }
              return {status: true, message: ''};
            }
          } else {
            console.log(5);
            return {status: false, message: responseMessage3};
          }
        } else {
          console.log(6);
          return {status: false, message: responseMessage1};
        }
      } else {
        console.log(7);
        return {status: false, message: responseMessage2};
      }
    } else if (maxLength !== undefined) {
      // when is a maxItems limit
      if (currentItems.length < maxLength) {
        // the new item can be added
        currentItems.push(newItem);
        if (idTable) {
          this.setItems(itemType, currentItems, idTable);
        } else {
          this.setItems(itemType, currentItems);
        }
        return {status: true, message: ''};
      } else {
        return {status: false, message: responseMessage1};
      }
    } else {
      currentItems.push(newItem);
      if (idTable) {
        this.setItems(itemType, currentItems, idTable);
      } else {
        this.setItems(itemType, currentItems);
      }
      return {status: true, message: ''};
    }
  }

  removeItem(itemId: string, itemType: string, idTable?: string) {
    let currentItems;
    let propertyName;
    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
      propertyName = 'beneficiaryId';
    } else if (itemType === 'agent') {
      currentItems = this.agents.getValue();
      propertyName = 'agentId';
    } else if (itemType === 'formatwo') {
      currentItems = this.formatosdos.getValue();
      propertyName = 'formatwoId';
    } else if (itemType === 'country') {
      currentItems = this.countries.getValue();
      propertyName = 'countryId';
    } else if (itemType === 'disease') {
      propertyName = 'idDisease';
      console.log('idTable: ', idTable);
      if (idTable === '1') {
        currentItems = this.diseases.getValue();
      } else if (idTable === '2') {
        currentItems = this.diseases2.getValue();
      } else if (idTable === '3') {
        currentItems = this.diseases3.getValue();
      }
    } else if (itemType === 'sport') {
      currentItems = this.sports.getValue();
      propertyName = 'idSportActivity';
    } else if (itemType === 'payment') {
      currentItems = this.payments.getValue();
      propertyName = 'paymentId';
    } else if (itemType === 'document') {
      // currentItems = this.documents.getValue();
      currentItems = [];
      propertyName = 'documentId';
      console.log('currentItems');
      console.log(currentItems);
    }
    currentItems = currentItems.filter(item => item[propertyName] !== itemId);
    // console.log('currentItems: ', currentItems);
    if (idTable) {
      this.setItems(itemType, currentItems, idTable);
    } else {
      this.setItems(itemType, currentItems);
    }
    if (itemType === 'agent' && currentItems.length === 1) {
      const mappedAgent = {
        agentId: currentItems[0].agentId, name: currentItems[0].name,
        promotor: currentItems[0].promotor, key: currentItems[0].key, participation: 100
      };
      this.updateItem(mappedAgent, 'agent');
    }
  }

  getLastItemId(itemType: string, idTable?: string) {
    let lastId = 0;
    let currentItems;
    let propertyItem;

    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
      propertyItem = 'beneficiaryId';
    } else if (itemType === 'agent') {
      currentItems = this.agents.getValue();
      propertyItem = 'agentId';
    } else if (itemType === 'formatwo') {
      currentItems = this.formatosdos.getValue();
      propertyItem = 'formatwoId';
    } else if (itemType === 'country') {
      currentItems = this.countries.getValue();
      propertyItem = 'countryId';
    } else if (itemType === 'disease') {
      propertyItem = 'idDisease';
      if (idTable === '1') {
        currentItems = this.diseases.getValue();
      } else if (idTable === '2') {
        currentItems = this.diseases2.getValue();
      } else if (idTable === '3') {
        currentItems = this.diseases3.getValue();
      }
    } else if (itemType === 'sport') {
      currentItems = this.sports.getValue();
      propertyItem = 'idSportActivity';
    } else if (itemType === 'payment') {
      currentItems = this.payments.getValue();
      propertyItem = 'paymentId';
    } else if (itemType === 'document') {
      console.log('Entro documents;');
      // currentItems = this.documents.getValue();
      currentItems = [];
      // console.log(currentItems);
      propertyItem = 'documentId';
    }
    const itemsLength = currentItems.length;
    // console.log('itemsLength: ', itemsLength);

    if (itemsLength >= 1) {
      lastId = Number(currentItems[itemsLength - 1][propertyItem]);
    }
    // console.log('lastId: ', lastId);
    return lastId;
  }

  updateItem(updatedItem, itemType, idTable?: string) {
    console.log('updateItem');
    console.log(updatedItem);
    let currentItems;
    let propertyItem;
    let propertyParticipation;
    let currentTotalParticipationPercentage;
    let maxLength;
    let responseMessage1;
    let responseMessage2;
    let responseMessage3;
    let responseMessage4;

    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
      propertyItem = 'beneficiaryId';
      propertyParticipation = 'participationPercentage';
      currentTotalParticipationPercentage = 0;
      currentItems.forEach((item) => {
        if (updatedItem[propertyItem] !== item[propertyItem]) {
          currentTotalParticipationPercentage = currentTotalParticipationPercentage + Number(item[propertyParticipation]);
        }
      });
      maxLength = 10;
      responseMessage1 = 'No se pueden agregar más de 10 beneficiarios';
      responseMessage2 = 'La suma de las participaciones de los beneficiarios excede el 100%';
      responseMessage3 = 'El porcentaje de participacion debe de ser mayor a 0';
    } else if (itemType === 'agent') {
      currentItems = this.agents.getValue();
      propertyItem = 'agentId';
      propertyParticipation = 'participation';
      currentTotalParticipationPercentage = 0;
      currentItems.forEach((item) => {
        if (updatedItem[propertyItem] !== item[propertyItem]) {
          currentTotalParticipationPercentage = currentTotalParticipationPercentage + Number(item[propertyParticipation]);
        }
      });
      maxLength = 2;
      responseMessage3 = 'El porcentaje de participacion debe de ser mayor a 0';
      responseMessage4 = 'La suma de los porcentajes de participación debe ser igual a 100%';
      responseMessage2 = 'La suma de las participaciones de los agentes excede el 100%';
      responseMessage1 = 'No se pueden agregar más de 2 beneficiarios';
    } else if (itemType === 'formatwo') {
      currentItems = this.formatosdos.getValue();
      propertyItem = 'formatwoId';
    } else if (itemType === 'country') {
      currentItems = this.countries.getValue();
      propertyItem = 'countryId';
    } else if (itemType === 'disease') {
      propertyItem = 'idDisease';
      maxLength = 10;
      console.log('idTable: ', idTable);
      if (idTable === '1') {
        currentItems = this.diseases.getValue();
      } else if (idTable === '2') {
        currentItems = this.diseases2.getValue();
      } else if (idTable === '3') {
        currentItems = this.diseases3.getValue();
      }
    } else if (itemType === 'sport') {
      maxLength = 5;
      currentItems = this.sports.getValue();
      propertyItem = 'idSportActivity';
    } else if (itemType === 'payment') {
      maxLength = 5;
      currentItems = this.payments.getValue();
      propertyItem = 'paymentId';
    }
    // const foundItem = currentItems.filter(i => i[propertyItem] === updatedItem[propertyItem])[0];

    // console.log('currentTotalParticipationPercentage: ', currentTotalParticipationPercentage);
    // console.log('Number(updatedItem[propertyParticipation]) : ', Number(updatedItem[propertyParticipation]));

    if (currentTotalParticipationPercentage !== undefined) {
      // when is a max participation limit
      if (currentTotalParticipationPercentage + Number(updatedItem[propertyParticipation]) <= 100) {
        console.log('here');
        // when is a maxItems limit
        console.log(currentItems.length);
        console.log(maxLength);
        console.log(currentItems.length <= maxLength);


        if (currentItems.length <= maxLength) {
          // the new item can be added
          if (Number(updatedItem[propertyParticipation]) > 0) {

            if ( currentItems.length === maxLength ) {
              if ( currentTotalParticipationPercentage + Number(updatedItem[propertyParticipation]) === 100) {
                const index = currentItems.findIndex((i) => i[propertyItem] === updatedItem[propertyItem]);
                currentItems[index] = updatedItem;
                if (idTable) {
                  this.setItems(itemType, currentItems, idTable);
                } else {
                  this.setItems(itemType, currentItems);
                }
                return {status: true, message: ''};
              } else {
                console.log(8);
                return {status: false, message: responseMessage4};
              }
            } else {
              const index = currentItems.findIndex((i) => i[propertyItem] === updatedItem[propertyItem]);
              currentItems[index] = updatedItem;
              if (idTable) {
                this.setItems(itemType, currentItems, idTable);
              } else {
                this.setItems(itemType, currentItems);
              }
              return {status: true, message: ''};
            }

            // const index = currentItems.findIndex((i) => i[propertyItem] === updatedItem[propertyItem]);
            // currentItems[index] = updatedItem;
            // this.setItems(itemType, currentItems);
            // return {status: true, message: ''};
          } else {
            return {status: false, message: responseMessage3};
          }
        } else {
          return {status: false, message: responseMessage1};
        }
      } else {
        return {status: false, message: responseMessage2};
      }
    } else if (maxLength !== undefined) {
      // when is a maxItems limit
      if (currentItems.length <= maxLength) {
        // the new item can be added
        const index = currentItems.findIndex((i) => i[propertyItem] === updatedItem[propertyItem]);
        currentItems[index] = updatedItem;
        if (idTable) {
          this.setItems(itemType, currentItems, idTable);
        } else {
          this.setItems(itemType, currentItems);
        }
        return {status: true, message: ''};
      } else {
        return {status: false, message: responseMessage1};
      }
    } else {
      const index = currentItems.findIndex((i) => i[propertyItem] === updatedItem[propertyItem]);
      currentItems[index] = updatedItem;
      if (idTable) {
        this.setItems(itemType, currentItems, idTable);
      } else {
        this.setItems(itemType, currentItems);
      }
      return {status: true, message: ''};
    }

    /*const index = currentItems.findIndex((i) => i[propertyItem] === updatedItem[propertyItem]);
    currentItems[index] = updatedItem;
    this.setItems(itemType, currentItems);*/
  }

  getTotalParticipationPercentage(itemType: string) {
    let totalParticipationPercentage = 0;
    let currentItems;
    let propertyItem;
    if (itemType === 'beneficiary') {
      currentItems = this.beneficiaries.getValue();
      propertyItem = 'participationPercentage';
    } else if (itemType === 'agent') {
      currentItems = this.agents.getValue();
      propertyItem = 'participation';
    } else if (itemType === 'formatwo') {
      currentItems = this.formatosdos.getValue();
      propertyItem = 'participation';
    } else if (itemType === 'country') {
      currentItems = this.countries.getValue();
      propertyItem = 'participation';
    } else if (itemType === 'payment') {
      currentItems = this.payments.getValue();
      propertyItem = 'participation';
    }

    currentItems.forEach((item) => {
      totalParticipationPercentage = totalParticipationPercentage + Number(item[propertyItem]);
    });

    return totalParticipationPercentage;
  }

  setItems(itemType: string, newItems, idTable?: string) {
    console.log('setItems');
    if (itemType === 'beneficiary') {
      this.beneficiaries.next(newItems);
    } else if (itemType === 'agent') {
      this.agents.next(newItems);
    } else if (itemType === 'formatwo') {
      this.formatosdos.next(newItems);
    } else if (itemType === 'country') {
      this.countries.next(newItems);
    } else if (itemType === 'disease') {
      if (idTable === '1') {
        this.diseases.next(newItems);
      } else if (idTable === '2') {
        this.diseases2.next(newItems);
      } else if (idTable === '3') {
        this.diseases3.next(newItems);
      }
    } else if (itemType === 'sport') {
      this.sports.next(newItems);
    } else if (itemType === 'payment') {
      this.payments.next(newItems);
    } else if (itemType === 'document') {
      // this.documents.next(newItems);
      // console.log(this.documents);
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
    // // console.log(`value of ${formControlName} : ${value} from step ${stepId}`);
    return value;
  }

  getConditions(renderConditions: string) {
    const result = [];
    let separatedRenderConditions;

    renderConditions = this.removeParenthesis(renderConditions);

    separatedRenderConditions = renderConditions.split(',');

    separatedRenderConditions.forEach((condition: string) => {
      const reExp = '^(.*?)([!<>=|]=?)(.*?)$'; // regular expresion for logic operators
      const res = condition.match(reExp);
      // // console.log('res: ', res);
      if (res !== null) {
        // res[1] --variableName
        // res[2] --simbolCondition
        // res[3] --valueCondition
        result.push(res);
      }
    });

    return result;
  }

  transformElementCondition(type, elementConditionValue) {
    // console.log('type: ', type);
    // console.log('elementConditionValue: ', elementConditionValue);
    let transformedValue;

    if (type === 'string') {
      transformedValue = elementConditionValue.toString();
    } else if (type === 'number') {
      transformedValue = Number(elementConditionValue);
    } else if (type === 'boolean') {
      transformedValue = Boolean(JSON.parse(elementConditionValue));
    } else {
      transformedValue = elementConditionValue;
    }

    return transformedValue;
  }

  evaluateCondition(formGroup: FormGroup, elementsCondition) {
    const formControlName = elementsCondition[1];
    const simbolCondition = elementsCondition[2];
    let conditionExpectedValue = elementsCondition[3];

    const valueFormControl = this.getFormControlValueByName(formGroup, formControlName);

    const typeOfValueFormControl = typeof valueFormControl;
    const typeOfConditionExpectedValue = typeof conditionExpectedValue;

    if (typeOfValueFormControl !== typeOfConditionExpectedValue) {
      conditionExpectedValue = this.transformElementCondition(typeOfValueFormControl, conditionExpectedValue);
    }

    // console.log('valueFormControl: ', valueFormControl);
    // console.log('conditionExpectedValue: ', conditionExpectedValue);

    let result = false;

    if (valueFormControl) {
      result = false;
    }

    switch (simbolCondition) {
      case '=':
        if (conditionExpectedValue === 'false') {
          if (valueFormControl === false) {
            result = true;
          }
        } else if (conditionExpectedValue === 'true') {
          if (valueFormControl === true) {
            result = true;
          }
        } else {
          if (valueFormControl === conditionExpectedValue) {
            // console.log('case = ', elementsCondition[3]);
            result = true;
          }
        }
        break;

      case '<':
        if (valueFormControl < conditionExpectedValue) {
          result = true;
        }
        break;
      case '>':
        if (valueFormControl > conditionExpectedValue) {
          result = true;
        }
        break;
      case '<=':
        if (valueFormControl <= conditionExpectedValue) {
          result = true;
        }
        break;
      case '>=':
        if (valueFormControl >= conditionExpectedValue) {
          result = true;
        }
        break;
      case '!=':
        if (valueFormControl !== conditionExpectedValue) {
          result = true;
        }
        break;
      default:
        result = false;
        break;
    }

    // console.log('result*: ', result);

    return result;
  }

  createNewFormGroup(fields: Field[]): FormGroup {
    const group: any = {};
    fields.forEach((field) => {
      group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
    });
    return new FormGroup(group);
  }

  updateFormGroup(formGroup: FormGroup, fields: Field[]) {
    const currentFormControls = formGroup.controls;

    console.log('currentFormControls: ', currentFormControls);
  }

  determinateEvenOrOdd(num: number): boolean {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  setSelectedOccupation(selectedOccupation: Occupation) {
    // console.log('searchModalFrom: ', this.searchModalFrom);
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
          // return response.data.items[0].item as SepomexObj;
          return null;
        })
      );
  }

  validateFormByStep(stepObj: Step) {
    const step = this.getStepById(stepObj.id);
    let isValid = true;
    let message = '';

    if (step) {
      // validate each field individually in the step
      step.contents.forEach((contentFromStep) => {
        console.log('contentType: ', contentFromStep.contentType);
        console.log('onContentFromStep.fields');

        if (contentFromStep.contentType === 'looseFields') {
          console.log('here1');
          const validateFieldArrayResult = this.validateFieldArray(contentFromStep.fields);
          console.log('validateFieldArrayResult: ', validateFieldArrayResult);
          if (validateFieldArrayResult === false) {
            isValid = false;
            message = 'Por favor, verfique la información a continuación';
          }
        } else if (contentFromStep.contentType.includes('table')) {
          console.log('here2');
          const validateTableResult = this.validateTable(contentFromStep.contentType);
          console.log('res: ', validateTableResult);
          if (validateTableResult.status === false) {
            isValid = false;
            message = validateTableResult.msg;
          }
        }

        if (contentFromStep.contentChildren) {
          console.log('onContentFromStep.contentChildren...');
          contentFromStep.contentChildren.forEach(contentChild => {
            if (contentChild.contentType === 'looseFields') {
              console.log('here3');
              const validateFieldArrayResult = this.validateFieldArray(contentChild.fields);
              console.log('validateFieldArrayResult: ', validateFieldArrayResult);
              if (validateFieldArrayResult === false) {
                isValid = false;
                message = 'Por favor, verfique la información a continuación';
              }
            } else if (contentChild.contentType.includes('table')) {
              console.log('here4');
              const validateTableResult = this.validateTable(contentChild.contentType);
              console.log('res: ', validateTableResult);
              if (validateTableResult.status === false) {
                isValid = false;
                message = validateTableResult.msg;
              }
            }
          });
        }
      });

      if (step.errors) { // check for validation between fields
        // console.log('errors: ', step.errors);
        step.errors.forEach((e) => {
          // console.log('e: ', e);
          const result = this.getStatusError(e.errorName);
          if (result) { // if the error exists the step is not valid
            // console.log('result: ', result);
            isValid = false;
            // message = e.errorMsg;
            message = 'Por favor, verfique la información a continuación';
          }
        });
      }

      console.log('isValid from validateFormByStep: ', isValid);

      return {
        status: isValid,
        msg: message
      };
    }
  }

  validateFieldArray(fields: Field[]) {
    let isValid = true;

    fields.forEach(field => {
      if (!field.disable) {
        field.valid = this.formGroup.controls[field.name].valid;
        if (field.valid === false) {
          console.log('field name: ', field.name);
          isValid = false;
        }
      }
    });

    return isValid;
  }

  validateTable(tableType) {
    let isValid = true;
    let message = '';

    if (tableType === 'table-beneficiary') {
      const totalParticipationPercentage = this.getTotalParticipationPercentage('beneficiary');
      console.log('totalParticipationPercentage: ', totalParticipationPercentage);
      console.log('validate table table-beneficiary...');
      if (this.beneficiaries.getValue().length === 0) { // validates that is at least one beneficiary added in the table
        isValid = false;
        message = 'Debe agregarse al menos un beneficiario';
      } else if (totalParticipationPercentage < 100) {
        // validates that the totalPercentage of beneficiaries is 100%
        isValid = false;
        message = 'La suma de las participaciones entre beneficiarios debe sumar el 100%';
      } else if (totalParticipationPercentage > 100) {
        isValid = false;
        message = 'La suma de las participaciones entre beneficiarios no debe exceder el 100%';
      }
    } else if (tableType === 'table-payment') {
      const valueQuestion = this.formGroup.controls.extremeSportsQuestion.value;
      if ( valueQuestion && valueQuestion === 'T') {
        console.log('valueQuestion: ', valueQuestion);
        // validate table content
        if (this.payments.getValue().length === 0) {
          isValid = false;
          message = 'Debe agregarse al menos una tarjeta para el cargo automático';
        } else if (this.payments.getValue().length > 5) {
          isValid = false;
          message = 'No pueden agregarse más de 5 instrumentos bancarios';
        }
      } else {
        isValid = true;
      }
    } else if (tableType === 'table-country') {
      // TODO: validation for table-country
    } else if (tableType === 'table-formatwo') {
      // TODO: validation for table-formatwo
    } else if (tableType === 'table-formatfour') {
      // TODO: validation for table-formatfour
    } else if (tableType === 'table-formatwob') {
      // TODO: validation for table-formatwob
    } else if (tableType === 'table-formathree') {
      // TODO: validation for table-formathree
    } else if (tableType === 'table-formatw8') {
      // TODO: validation for table-formatw
    } else if (tableType === 'table-coverage') {
      // TODO: validation for table-coverage
    } else if (tableType === 'table-sports') {
      // check question value
      const valueQuestion = this.formGroup.controls.extremeSportsQuestion.value;
      if ( valueQuestion && valueQuestion === true) {
        console.log('valueQuestion: ', valueQuestion);
        // validate table content
        if (this.sports.getValue().length === 0) {
          isValid = false;
          message = 'Debe agregarse al menos un deporte / actvidad';
        } else if (this.sports.getValue().length > 5) {
          isValid = false;
          message = 'No pueden agregarse más de 5 deportes / actividades';
        }
      } else {
        isValid = true;
      }
      console.log('validate table table-sports');
    } else if (tableType === 'table-diseases') {
      // TODO: validation for table-diseases
    } else if (tableType === 'table-agent') {
      console.log('validate table table-agent');
      if (this.agents.getValue().length === 0) { // validates that is at least one beneficiary added in the table
        isValid = false;
        message = 'Debe agregarse al menos un agente';
      } else if (this.getTotalParticipationPercentage('agent') < 100) {
        // validates that the totalPercentage of beneficiaries is 100%
        isValid = false;
        message = 'La suma de las participaciones entre agentes debe sumar el 100%';
      } else if (this.getTotalParticipationPercentage('agent') > 100) {
        // validates that the totalPercentage of beneficiaries is 100%
        isValid = false;
        message = 'La suma de las participaciones entre agentes no debe exceder el 100%';
      }
    } else if (tableType === 'documents') {
      // TODO: validation for documents
    }

    return {
      status: isValid,
      msg: message
    };
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

  logicalExpressionEvaluation(str) {
    console.log('onLogicalExpressionEvaluation...');
  }

  reverseString(str) {
    // Step 1. Use the split() method to return a new array
    const splitString = str.split('');
    // Step 2. Use the reverse() method to reverse the new created array
    const reverseArray = splitString.reverse();
    // Step 3. Use the join() method to join all elements of the array into a string
    const joinArray = reverseArray.join('');

    return joinArray;
  }

  stringToBoolean(str) {
    return (/true/i).test(str);
  }

  /*inputs test:
    * input 1: ((campo1=true,&,campo1=true),|,campo3=true)
    * input 2: (campo1=true)
    * */

  evaluateConditions(exp, formGroup: FormGroup) {
    // console.log('onGetExpressionElements...');
    const arr = [];
    const reversedString = this.reverseString(exp);

    for (const ctr of reversedString) {
      if (ctr === '(') {
        const s = [];
        while (arr[arr.length - 1] !== ')') {
          s.push(arr[arr.length - 1]);
          arr.pop();
        }

        arr.pop();

        let sAsString = '';
        s.forEach((sItem) => {
          sAsString = sAsString + sItem;
        });
        // console.log('sAsString: ', sAsString);

        // for one single operation
        const z = sAsString.split(',');
        // console.log('z: ', z);

        if (z.length === 1) {
          const conditionsZ = this.getConditions(z[0]);
          // console.log('conditionsZ: ', conditionsZ);
          const resEvalZ = this.evaluateCondition(formGroup, conditionsZ[0]);
          // console.log('resEvalZ: ', resEvalZ);
          arr.push(resEvalZ);
        } else if (z.length > 1) { // for AND and OR operation (more than one operation)
          const a = z[0];
          // console.log('a: ', a);
          const b = z[2];
          // console.log('b: ', b);
          let c;

          let resEvalA;
          let resEvalB;

          if (a.includes('=') || a.includes('<') || a.includes('>') || a.includes('!=')) {
            const conditionsA = this.getConditions(a);
            resEvalA = this.evaluateCondition(formGroup, conditionsA[0]);
          } else {
            if (a === 'true' || a === 'false') {
              resEvalA = this.stringToBoolean(a);
            } else {
              resEvalA = a;
            }
          }
          if (b.includes('=') || b.includes('<') || b.includes('>') || b.includes('!=')) {
            const conditionsB = this.getConditions(b);
            resEvalB = this.evaluateCondition(formGroup, conditionsB[0]);
          } else {
            if (b === 'true' || b === 'false') {
              resEvalB = this.stringToBoolean(b);
            } else {
              resEvalB = b;
            }
          }
          // console.log('resEvalA: ', resEvalA);
          // console.log('resEvalB: ', resEvalB);

          if (z[1] === '&') {
            c = resEvalA && resEvalB;
          } else {
            c = resEvalA || resEvalB;
          }
          // console.log('c: ', c);
          arr.push((c));
        }
      } else {
        arr.push(ctr);
      }
    }
    // console.log('arr: ', arr);
    // console.log('arr.length - 1: ', arr.length - 1);
    return arr[arr.length - 1];
  }

  removeParenthesis(str) {
    return str.replace(/[()]/g, '');
  }

  /*inputs test:
   * input 1: ((campo1=true,&,campo1=true),|,campo3=true)
   * input 2: (campo1=true)
   * */
  getDependedFields(exp) {
    // remove parenthesis
    const expWithoutParenthesis = this.removeParenthesis(exp);

    const aux = expWithoutParenthesis.split(',');
    const dependedFields = [];

    aux.forEach((auxElem) => {
      if (!auxElem.includes('&') && !auxElem.includes('|')) {
        const conditionElements = this.getConditions(auxElem);
        dependedFields.push(conditionElements[0][1]);
      }
    });

    return dependedFields;
  }

  getStatusError(errorId) {
    const errors = this.formGroup.errors;
    if (errors) {
      if (errors[errorId]) {
        // console.log('errorId: ', errorId);
        // console.log('errors[errorId]: ', errors[errorId]);
        return errors[errorId];
      } else {
        // console.log('else 1');
        return null;
      }
    } else {
      // console.log('else 2');
      return null;
    }
  }

  evaluateCoverageBehaviour(params, actualValue?) {
    let exCoverages = params.split(',');
    let status;

    if (actualValue !== undefined) {
      if (actualValue) {
        // disable the exCoverages
        exCoverages.forEach((covName) => {
          status = this.formGroup.controls[covName].status;
          console.log('status: ', status);
          if (status === 'VALID') {
            this.formGroup.controls[covName].disable();
          }

        });
      } else {
        // enable the exCoverages
        exCoverages.forEach((covName) => {
          status = this.formGroup.controls[covName].status;
          if (status === 'DISABLED') {
            this.formGroup.controls[covName].enable();
          }
        });
      }
    }
  }

  getPatternCatalog(): Observable<[]> {
    let urlCatalog = '';
    const id = 'pattern';
    urlCatalog = URL_PATTERN_CATALOG;
    // console.log('urlCatalog: ', urlCatalog);
    return this.httpClient.get(urlCatalog)
      .pipe(
        map((catalog) => {
          return catalog[id];
        })
      );
  }

  getAgentItemUser() {
    // get headers user
    const userHeaders = this.getHeadersUser('userId');
    console.log('userHeaders --< ' + userHeaders);
    // get agent catalog
    this.httpClient.get(URL_AGENT_CATALOG).subscribe((agents: any) => {
      agents.catalogData.extension.variations.forEach(agent => {
        if (agent.agente === userHeaders + '') {
          const mapAgent = {
            agentId: agent.agente, name: agent.nombreAgente, key: agent.promotoria,
            promotor: agent.nombrePromotoria, participation: 100
          };
          // insert user == agent
          this.addItem(mapAgent, 'agent');
        }
      });
    });
  }

  getHeadersUser(key) {
    // User property map
    const stores = window.localStorage;
    console.log('stores');
    console.log(stores);
    console.log(stores.getItem(key));
    // JSON.parse(localStorage.getItem(key))
    // const headerUser = {
    // userId: stores.getItem('userId') !== null ? stores.getItem('userId') : '9504'
    // };
    return stores.getItem(key) != null ? stores.getItem(key) : '9504';
  }

  validateApplicationForm() {
    let isValid = true;
    let message = '';

    this.applicationObj.sections.forEach(section => {
      // console.log('section: ', section);
      section.contents.forEach((contentFromSection) => {
        if (contentFromSection.fields) {
          const validateFieldArrayResult = this.validateFieldArray(contentFromSection.fields);
          console.log('validateFieldArrayResult: ', validateFieldArrayResult);
          if (validateFieldArrayResult === false) {
            isValid = false;
            message = 'Por favor, verfique la información a continuación';
          }
        } else {
          if (contentFromSection.process) {
            contentFromSection.process.steps.forEach(step => {
              if (step.requiredConditions) {
                const requiredConditionsResult = this.evaluateConditions(step.requiredConditions, this.formGroup);
                if (requiredConditionsResult) {
                  const evaluateStepResult = this.validateFormByStep(step);
                  if (evaluateStepResult.status === false) {
                    isValid = false;
                    message = message + step.id + ') ' + step.title + '-';
                  }
                }
              } else {
                const evaluateStepResult = this.validateFormByStep(step);
                if (evaluateStepResult.status === false) {
                  isValid = false;
                  message = message + step.id + ') ' + step.title + '-';
                }
              }
            });
          }
        }
      });
    });

    return {
      status: isValid,
      msg: message
    };
  }
  // @ts-ignore
  getCatalog(id: string, source: string): Observable<[]> {
    console.log('getCatalog --> id: ' + id + ' , source: ' + source);
    let urlCatalog = '';
    switch (id) {
      case 'addresType':
        urlCatalog = URL_CAT_ADDRESS_TYPE;
        break;
      case 'bankBienes':
        urlCatalog = URL_CAT_BANK_BIENES;
        break;
      case 'bloqueoRetenedorCovert':
        urlCatalog = URL_CAT_BLOQ_RET_COBERT;
        break;
      case 'collectionChanel':
        urlCatalog = URL_CAT_COLLECTION_CHANEL;
        break;
      case 'conceptRet':
        urlCatalog = URL_CAT_CONCEPT_RET;
        break;
      case 'country':
        urlCatalog = URL_CAT_COUNTRY;
        break;
      case 'engineVariable':
        urlCatalog = URL_CAT_ENGINE_VARIABLE;
        break;
      case 'federalEntity':
        urlCatalog = URL_CAT_FEDERAL_ENTITY;
        break;
      case 'gender':
        urlCatalog = URL_CAT_GENDER;
        break;
      case 'laboralRegimen':
        urlCatalog = URL_CAT_LABORAL_REGIMEN;
        break;
      case 'liquidationType':
        urlCatalog = URL_CAT_LIQUIDATION_TYPE;
        break;
      case 'maritalStatus':
        urlCatalog = URL_CAT_MARITAL_STATUS;
        break;
      case 'maxCoverage':
        urlCatalog = URL_CAT_MAX_COVERAGE;
        break;
      case 'maxOccupation':
        urlCatalog = URL_CAT_MAX_OCCUPATION;
        break;
      case 'maximumSA':
        urlCatalog = URL_CAT_MAXIMUM_SA;
        break;
      case 'occupation':
        urlCatalog = URL_CAT_OCCUPATION;
        break;
      case 'paymentMode':
        urlCatalog = URL_CAT_PAYMENT_MODE;
        break;
      case 'plan':
        urlCatalog = URL_CAT_PLAN;
        break;
      case 'planCoverageProvida':
        urlCatalog = URL_CAT_PLAN_COVERAGE_PROVIDA;
        break;
      case 'preferredContactDay':
        urlCatalog = URL_CAT_PREFERRED_CONTACT_DAY;
        break;
      case 'preferredContactTime':
        urlCatalog = URL_CAT_PREFERRED_CONTACT_TIME;
        break;
      case 'preferredContactType':
        urlCatalog = URL_CAT_PREFERRED_CONTACT_TYPE;
        break;
      case 'promotoria':
        urlCatalog = URL_CAT_PROMOTORIA;
        break;
      case 'relationship':
        urlCatalog = URL_CAT_RELATIONSHIP;
        break;
      case 'relationshipCoverage':
        urlCatalog = URL_CAT_RELATIONSHIP_COVERAGE;
        break;
      case 'retenedor':
        urlCatalog = URL_CAT_RETENEDOR;
        break;
      case 'subIdentificationType':
        urlCatalog = URL_CAT_SUB_IDENTIFICATION_TYPE;
        break;
      case 'guardBoxOptions':
        urlCatalog = URL_CAT_GUARD_BOX_OPTIONS;
        break;
    }
    return this.httpClient.get(urlCatalog)
      .pipe(
        map((catalog) => {
          return catalog[id];
        })
      );
  }

}
