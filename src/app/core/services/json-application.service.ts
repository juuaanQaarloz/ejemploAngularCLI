import {Injectable} from '@angular/core';
import {ApplicationJson} from '../../models/applicationJson/applicationJson';
import {APP_SWAGGER} from '../mock/mock-swagger/mock-swagger-app';
import {ApplicationService} from './application.service';
import {Beneficiary, Step} from '../../models';
import set from 'lodash/set';
import get from 'lodash/get';
import {transformDate} from '../utilities';
import {BeneciciaryJson} from '../../models/applicationJson/beneciciaryJson';
import {PersonJson} from '../../models/applicationJson/personJson';

@Injectable({
  providedIn: 'root'
})
export class JsonApplicationService {

  appJson: ApplicationJson;

  constructor(
    private appService: ApplicationService
  ) {
    this.appService.getApplicationFromJson().subscribe((result) => {
      this.appJson = result;
      console.log('applicationJson after parse', this.appJson);
    });
  }

  getAppJson() {
    return this.appJson;
  }

  setAppJson(newAppJson) {
    this.appJson = newAppJson;
  }

  saveInJsonSwagger(stepObj: Step) {
    console.log('on saveInJsonSwagger');
    const step = this.appService.getStepById(stepObj.id);

    console.log('appJson: ', this.getAppJson());

    if (step) {
      // validate each field individually in the step
      step.contents.forEach((contentFromStep) => {

        if (contentFromStep.contentType === 'looseFields') {
          contentFromStep.fields.forEach((field) => {
            if (field.entityField) {
              // get current value from FORM FIELD
              let value = this.appService.getFormGroup().controls[field.name].value;
              if (value) {
                if (field.type === 'date') {
                  value = transformDate(value, 'YYYY-MM-DD').toString();
                }
                // console.log('value: ', value);
                // console.log('field.entityField: ', field.entityField);
                // get property
                const property = get(this.appJson, field.entityField);
                // console.log('before property: ', property);
                // console.log('before typeof property: ', typeof property);
                if (property) {
                  // console.log('after property: ', property);
                  // console.log('typeof property: ', typeof property);
                }
                // setting value from FORM to JSON
                set(this.appJson, field.entityField, value);
              }
            }
          });
        } else if (contentFromStep.contentType.includes('table')) {
          // TODO: Integrate table structure in JSON structure
          this.mapTableToJson(contentFromStep.contentType);
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
                    // console.log('before property: ', property);
                    // console.log('before typeof property: ', typeof property);
                    if (property) {
                      // console.log('after property: ', property);
                      // console.log('typeof property: ', typeof property);
                    }
                    set(this.appJson, field.entityField, value);
                  }
                }
              });
            } else if (contentChild.contentType.includes('table')) {
              // TODO: Integrate table structure in JSON structure
              this.mapTableToJson(contentChild.contentType);
            }
          });
        }
      });

      console.log('appJson object: ', this.getAppJson());
      // console.log('appJson json: ', JSON.stringify(this.getAppJson()));

      // return JSON.stringify(this.getAppJson());
      this.appService.saveFunction(this.getAppJson());
    }
  }

  mapTableToJson(tableType: string) {
    console.log('tableType: ', tableType);
    if (tableType === 'table-beneficiary') {
      const beneficiaries = this.appService.beneficiaries.getValue();
      if (beneficiaries.length > 0) {
        console.log(' beneficiaries: ', beneficiaries);
        beneficiaries.forEach((beneficiary) => {
          console.log('beneficiary: ', beneficiary);
          this.mapBeneficiary(beneficiary);
        });
      }
    }
  }

  mapBeneficiary(beneficiary: Beneficiary) {
    let newBeneficiary: BeneciciaryJson = {
        cvr_bene_id: 0,
        cvr_cd: '',
        pln_cd: '',
        ins_id: 0,
        app_id: 0,
        bene_tp_cd: '',
        bene_prtcp_pct: 0,
        cvr_bene_cmnt_txt: '',
        bene_rel_cd: '',
        bene_rel_desc: '',
        bene_party_app_id: 0,
        person: null,
        rec_crt_ts: '',
        rec_crt_usr_id: '',
        rec_updt_ts: '',
        rec_updt_usr_id: '',
        bene_fid_cnd_flg: '',
        bene_fid_cntrc_nm: '',
        bene_fid_lttr_nm: '',
        bene_ref_inst_lttr: '',
        bene_addrss_sm_inss_ind: '',
      };

    newBeneficiary.app_id = this.appJson.app_id;
    newBeneficiary.bene_addrss_sm_inss_ind = this.appService.transformElementCondition(
      typeof newBeneficiary.bene_addrss_sm_inss_ind,
      beneficiary.addressSameAsTitular);
    console.log('newBeneficiary.bene_addrss_sm_inss_ind: ', newBeneficiary.bene_addrss_sm_inss_ind);

    newBeneficiary.cvr_bene_id = Number(beneficiary.beneficiaryId);
    newBeneficiary.bene_tp_cd = beneficiary.beneficiaryType;
    newBeneficiary.bene_prtcp_pct = Number(beneficiary.participationPercentage);
  }
}
