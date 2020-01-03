import { Injectable } from '@angular/core';
import {ApplicationJson} from '../../models/applicationJson/applicationJson';
import {APP_SWAGGER} from '../mock/mock-swagger/mock-swagger-app';
import {ApplicationService} from './application.service';
import {Step} from '../../models';
import set from 'lodash/set';
import get from 'lodash/get';
import {transformDate} from '../utilities';

@Injectable({
  providedIn: 'root'
})
export class JsonApplicationService {

  appJson: ApplicationJson = APP_SWAGGER;

  constructor(
    private appService: ApplicationService
  ) { }

  getAppJson() {
    return this.appJson;
  }

  setAppJson(newAppJson) {
    this.appJson = newAppJson;
  }

  saveInJsonSwagger(stepObj: Step) {
    console.log('on saveInJsonSwagger');
    const step = this.appService.getStepById(stepObj.id);

    if (step) {
      // validate each field individually in the step
      step.contents.forEach((contentFromStep) => {

        if (contentFromStep.contentType === 'looseFields') {
          contentFromStep.fields.forEach((field) => {
            if (field.entityField) {
              console.log('field.entityField: ', field.entityField);
              // get current value from FORM FIELD
              let value = this.appService.getFormGroup().controls[field.name].value;
              if (value) {
                if (field.type === 'date') {
                  value = transformDate(value, 'YYYY-MM-DD').toString();
                }
                console.log('value: ', value);
                // get property
                let property = get(this.appJson, field.entityField);
                console.log('before property: ', property);
                console.log('before typeof property: ', typeof property);
                if (property) {
                  console.log('after property: ', property);
                  console.log('typeof property: ', typeof property);
                }
                // setting value from FORM to JSON
                set(this.appJson, field.entityField, value);
              }
            }
          });
        } else if (contentFromStep.contentType.includes('table')) {
          // TODO: Integrate table structure in JSON structure
        }

        if (contentFromStep.contentChildren) {
          // console.log('onContentFromStep.contentChildren...');
          contentFromStep.contentChildren.forEach(contentChild => {
            if (contentChild.contentType === 'looseFields') {
              contentChild.fields.forEach((field) => {
                if (field.entityField) {
                  // get current value from FORM FIELD
                  let value = this.appService.getFormGroup().controls[field.name].value;

                  if (value) {
                    // setting value from FORM to JSON
                    if (field.type === 'date') {
                      value = transformDate(value, 'YYYY-MM-DD').toString();
                    }
                    console.log('value: ', value);
                    // get property
                    let property = get(this.appJson, field.entityField);
                    console.log('before property: ', property);
                    console.log('before typeof property: ', typeof property);
                    if (property) {
                      console.log('after property: ', property);
                      console.log('typeof property: ', typeof property);
                    }
                    set(this.appJson, field.entityField, value);
                  }
                }
              });
            } else if (contentChild.contentType.includes('table')) {
              // TODO: Integrate table structure in JSON structure
            }
          });
        }
      });

      console.log('appJson object: ', this.getAppJson());
      // console.log('appJson json: ', JSON.stringify(this.getAppJson()));

      // return JSON.stringify(this.getAppJson());
    }
  }
}
