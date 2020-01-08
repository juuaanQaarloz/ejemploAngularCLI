import {Injectable} from '@angular/core';
import {ApplicationJson} from '../../models/applicationJson/applicationJson';
import {ApplicationService} from './application.service';
import {Step} from '../../models';
import set from 'lodash/set';
import {calculateAge, transformDate} from '../utilities';
import {BeneciciaryJson} from '../../models/applicationJson/beneciciaryJson';
import {PersonJson} from '../../models/applicationJson/personJson';
import {AgentJson} from '../../models/applicationJson/agentJson/agentJson';
import {AgentCd} from '../../models/applicationJson/agentJson/agentCd';
import {AddressJson} from '../../models/applicationJson/addressJson';

@Injectable({
  providedIn: 'root'
})
export class JsonApplicationService {

  appJson: ApplicationJson = new ApplicationJson();

  constructor(
    private appService: ApplicationService
  ) {
    this.appService.getApplicationBase().subscribe((response) => {
      console.log('response: ', response);
      // get new application folio
      this.appJson.app_id = response.app_id;
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
                    if (field.type === 'date') {
                      value = transformDate(value, 'YYYY-MM-DD').toString();
                    }
                    // setting value from FORM to JSON
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

      this.appJson.app_stts_cd = step.id;
      if (step.id === '1' || step.id === '4') {
        let resp = this.appService.getFormGroup().controls.typePerson.value;
      }
      this.appService.saveSolicitud(this.getAppJson()).subscribe((response: ApplicationJson) => {
        console.log('response: ', response);
        this.setAppJson(response);
      });
    }
  }

  mapTableToJson(tableType: string) {
    let items;
    console.log('tableType: ', tableType);
    if (tableType === 'table-beneficiary') {
      items = this.appService.beneficiaries.getValue();
      if (items.length > 0) {
        console.log(' beneficiaries: ', items);
        items.forEach((beneficiary, i) => {
          console.log('beneficiary: ', beneficiary);
          set(this.appJson, `insuredCondition.beneciciary[${i}]`, this.mapItem('beneficiary', beneficiary, i));
        });
      }
    } else if (tableType === 'table-agent') {
      items = this.appService.agents.getValue();
      if (items.length > 0) {
        items.forEach((agent, i) => {
          console.log('agent: ', agent);
          set(this.appJson, `agents[${i}]`, this.mapItem('agent', agent, i));
        });
      }
    } else if (tableType === 'table-payment') {
      items = this.appService.payments.getValue();
      if (items.length > 0) {
        items.forEach((payment, i) => {
          console.log('payment: ', payment);
          this.mapItem('payment', payment, i);
        });
      }
    }
  }

  mapItem(itemType, item, index) {
    if (itemType === 'agent') {
      let newAgent: AgentJson = new AgentJson();
      let newAgentCd: AgentCd = new AgentCd();

      newAgentCd.agnt_cd = item.key;
      newAgentCd.agnt_pmtr_cd = item.promotor;
      newAgentCd.agnt_party_nm = item.name;
      newAgentCd.rec_crt_ts = new Date().toDateString();

      newAgent.app_id = this.appJson.app_id;
      newAgent.agnt_cd = newAgentCd;
      newAgent.agnt_part_per = Number(item.participation);
      newAgent.part_ord = index;
      newAgent.rec_crt_ts = new Date().toDateString();

      return newAgent;
    } else if (itemType === 'beneficiary') {
      let newBeneficiary: BeneciciaryJson = new BeneciciaryJson();
      let person: PersonJson = new PersonJson();
      let address: AddressJson =  new AddressJson();

      address.addrss_id = 0;
      address.app_id = this.appJson.app_id;
      address.strt_nm = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].strt_nm : item.address.street;
      address.ext_num = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].ext_num : item.address.exteriorNumber;
      address.int_num = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].int_num : item.address.interiorNumber;
      address.zip_cod = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].zip_cod : item.address.zipCode;
      address.subt_nm = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].zip_cod : item.address.neighborhood;
      address.towt_nm = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].towt_nm : item.address.city;
      address.sta_cod = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].sta_cod : item.address.state;
      address.cntry_cod = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].cntry_cod : item.address.country;
      address.mncplty_nm = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].mncplty_nm : item.address.municipality;
      address.rec_crt_ts = new Date().toDateString();

      person.party_app_id = this.appJson.insurer.party_app_id;
      person.app_id = this.appJson.app_id;
      person.per_brth_dt = item.beneficiaryType === 'phyPerson' ? item.birthDateOrConstitution : null;
      person.per_age = item.beneficiaryType === 'phyPerson' ? calculateAge(item.birthDateOrConstitution) : null;
      person.party_typ_cd = item.beneficiaryType === 'phyPerson' ? true : false;
      person.Address[0] = address;

      newBeneficiary.cvr_bene_id = Number(item.beneficiaryId);
      newBeneficiary.app_id = this.appJson.app_id;
      newBeneficiary.bene_tp_cd = item.beneficiaryType;
      newBeneficiary.bene_prtcp_pct = item.participationPercentage;
      newBeneficiary.bene_rel_cd = item.relationship;
      newBeneficiary.person = person;
      newBeneficiary.rec_crt_ts = new Date().toDateString();
      newBeneficiary.bene_fid_cnd_flg = item.beneficiaryType === 'fidPerson' ? '1' : '0';
      newBeneficiary.bene_fid_cntrc_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : null;
      newBeneficiary.bene_fid_lttr_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : null;
      newBeneficiary.bene_ref_inst_lttr = item.beneficiaryType === 'fidPerson' ? item.instructionLetterNumber : null;
      newBeneficiary.bene_addrss_sm_inss_ind = item.addressSameAsTitular;

      return newBeneficiary;
    } else if (itemType === 'payment') {
      // TODO: map payments table
    }
  }
}
