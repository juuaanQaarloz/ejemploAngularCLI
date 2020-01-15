import {Injectable} from '@angular/core';
import {ApplicationJson} from '../../models/applicationJson/applicationJson';
import {ApplicationService} from './application.service';
import {Beneficiary, Step} from '../../models';
import set from 'lodash/set';
import get from 'lodash/get';
import {calculateAge, transformDate} from '../utilities';
import {BeneciciaryJson} from '../../models/applicationJson/beneciciaryJson';
import {PersonJson} from '../../models/applicationJson/personJson';
import {AgentJson} from '../../models/applicationJson/agentJson/agentJson';
import {AgentCd} from '../../models/applicationJson/agentJson/agentCd';
import {AddressJson} from '../../models/applicationJson/addressJson';
import {AccountJson} from '../../models/applicationJson/accountJson';
import {BankAccount} from '../../models/applicationJson/bankJson/bankAccount';
import {DiseaseJson} from '../../models/applicationJson/diseaseJson';
import {ForeignCountryTaxJson} from '../../models/applicationJson/foreignCountryTaxJson';
import {QuesList} from '../../models/applicationJson/questionaryJson/quesList';

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
      let partyAppType = this.appService.getFormGroup().controls.typePerson.value;
      if (partyAppType !== null && partyAppType !== undefined) {
        // set(this.appJson, 'insurer.party_typ_cd', partyAppType === 'phyPerson' ? true : false);
        set(this.appJson, 'insurer.party_typ_cd', partyAppType);
      }
      console.log(get(this.appJson, 'insurer.party_typ_cd'));
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
              if (value !== null && value !== undefined) {
                if (field.type === 'date') {
                  value = transformDate(value, 'YYYY-MM-DD').toString();
                } else if (field.subtype === 'currency') {
                  value = Number(value.replace(/[^0-9.-]+/g, ''));
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
                  if (value !== null && value !== undefined) {
                    if (field.type === 'date') {
                      value = transformDate(value, 'YYYY-MM-DD').toString();
                    } else if (field.subtype === 'currency') {
                      value = Number(value.replace(/[^0-9.-]+/g, ''));
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
      if (step.id === '6') {
        set(this.appJson, 'shareHolders[0].person.Address', []);
        set(this.appJson, 'shareHolders[0].person.nationalities', []);
        set(this.appJson, 'shareHolders[1].person.Address', []);
        set(this.appJson, 'shareHolders[1].person.nationalities', []);
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
          set(this.appJson, `accounts[${i}]`, this.mapItem('payment', payment, i));
        });
      }
    } else if (tableType === 'table-sports') {
      items = this.appService.sports.getValue();
      if (items.length > 0) {
        items.forEach((sport, i) => {
          console.log('sport: ', sport);
          set(this.appJson, `QuesList[${i}]`, this.mapItem('sport', sport, i));
        });
      }
    } else if (tableType === 'table-diseases') {
      items = this.appService.diseases.getValue();

      if (items.length > 0) {
        items.forEach((disease, i) => {
          console.log('disease: ', disease);
          set(this.appJson, `insurer.diseases[${i}]`, this.mapItem('disease', disease, i));
        });
      }
    } else if (tableType === 'table-country') {
      items = this.appService.countries.getValue();
      if (items.length > 0) {
        items.forEach((country, i) => {
          console.log('country', country);
          set(this.appJson, `foreignCountryTaxes[${i}]`, this.mapItem('country', country, i));
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

      newAgent.app_id = this.appJson.app_id;
      newAgent.agnt_cd = newAgentCd;
      newAgent.agnt_part_per = Number(item.participation);
      newAgent.part_ord = index;

      return newAgent;
    } else if (itemType === 'beneficiary') {
      let newBeneficiary: BeneciciaryJson = new BeneciciaryJson();

      newBeneficiary.person = this.mapPersonBeneficiary(item.beneficiaryType, item);
      newBeneficiary.person.Address.push(this.mapAddressBeneficiary(item.beneficiaryType, item));
      newBeneficiary.bene_tp_cd = item.beneficiaryType;
      newBeneficiary.bene_rel_cd = item.relationship;

      newBeneficiary.bene_prtcp_pct = item.participationPercentage;
      newBeneficiary.bene_fid_cnd_flg = item.beneficiaryType === 'fidPerson' ? 'true' : null;
      newBeneficiary.bene_fid_cntrc_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : null;
      newBeneficiary.bene_fid_lttr_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : null;
      newBeneficiary.bene_ref_inst_lttr = item.beneficiaryType === 'fidPerson' ? item.instructionLetterNumber : null;
      newBeneficiary.bene_addrss_sm_inss_ind = item.addressSameAsTitular ? item.addressSameAsTitular : null;

      console.log('newBeneficiary: ', newBeneficiary);

      return newBeneficiary;
    } else if (itemType === 'payment') {
      // TODO: map payments table
      console.log('payment item: ', item);
      let newAccount: AccountJson = new AccountJson();
      let newBanckAccount: BankAccount = new BankAccount();

      newBanckAccount.pymnt_prrty = item.paymentId;
      newBanckAccount.bnk_nm = item.txtBank;
      newBanckAccount.std_bnk_cd = item.txtClabe;

      newAccount.bankAccount = newBanckAccount;
      newAccount.clct_card_typ_id = item.selectCard;

      return newAccount;

    } else if (itemType === 'sport') {
      let newQuesList = new QuesList();

      newQuesList.actvty_id = item.idSportActivity;
      newQuesList.clmn_1 = item.name;
      newQuesList.clmn_2 = item.periodicity;
      newQuesList.clmn_3 = item.description;

      return newQuesList;

      // TODO: map sports table
    } else if (itemType === 'disease') {
      // TODO: map disease table
      let newDisease = new DiseaseJson();

      newDisease.illnss_nm = item.name;
      newDisease.illnss_dt = transformDate(item.diagnosticDate, 'YYYY-MM-DD').toString();
      newDisease.illnss_drtn = item.duration;
      newDisease.illnss_hlth_stt = item.actualCondition;
      newDisease.party_app_id = this.appJson.insurer.party_app_id;
      newDisease.app_id = this.appJson.app_id;

      return newDisease;
    } else if (itemType === 'country') {
      console.log('country: ', item);
      let newCountry: ForeignCountryTaxJson = new ForeignCountryTaxJson();

      newCountry.cntry_nm = item.statCountry;
      newCountry.frgn_cntry_tin = item.taxCountryId;

      return newCountry;
    }
  }

  mapAddressBeneficiary(beneficiaryType: string, item: Beneficiary) {
    let address: AddressJson = new AddressJson();

    if (beneficiaryType === 'phyPerson') {
      // set beneficiary type 'Fisico'
      address.strt_nm = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].strt_nm : item.address.street;
      address.ext_num = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].ext_num : item.address.exteriorNumber;
      address.int_num = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].int_num : item.address.interiorNumber;
      address.zip_cod = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].zip_cod : item.address.zipCode;
      address.subt_nm = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].zip_cod : item.address.neighborhood;
      address.towt_nm = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].towt_nm : item.address.city;
      address.sta_cod = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].sta_cod : item.address.state;
      address.cntry_cod = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].cntry_cod : item.address.country;
      address.mncplty_nm = item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].mncplty_nm : item.address.municipality;

    } else if (beneficiaryType === 'morPerson') {

      // set beneficiary type 'Moral'
      address.strt_nm = item.address.street;
      address.ext_num = item.address.exteriorNumber;
      address.int_num = item.address.interiorNumber ? item.address.interiorNumber : null;
      address.zip_cod = item.address.zipCode;
      address.subt_nm = item.address.neighborhood;
      address.towt_nm = item.address.city;
      address.sta_cod = item.address.state;
      address.cntry_cod = item.address.country;
      address.mncplty_nm = item.address.municipality;

    } else if (beneficiaryType === 'fidPerson') {
      // set beneficiary type 'Fiduciaria'
      address.strt_nm = 'CALLE';
      address.ext_num = 'EXT';
      address.int_num = 'INT';
      address.zip_cod = 'ZIP_CODE';
      address.subt_nm = 'SUBURB';
      address.towt_nm = 'TOWN';
      address.sta_cod = 'STATE';
      address.cntry_cod = 'COUNTRY';
      address.mncplty_nm = 'MUN';
    }

    return address;
  }

  mapPersonBeneficiary(beneficiaryType: string, item: Beneficiary) {
    let person = new PersonJson();
    person.party_typ_cd = item.beneficiaryType === 'phyPerson' ? true : false;

    if (beneficiaryType === 'phyPerson') {
      person.per_brth_dt = transformDate(new Date(item.birthDateOrConstitution), 'YYYY-MM-DD').toString();
      person.per_age = calculateAge(item.birthDateOrConstitution);
      person.per_frst_nm = item.name;
      person.per_ptrnl_lst_nm = item.fatherLastName;
      person.per_mtrnl_lst_nm = item.motherLastName;

    } else if (beneficiaryType === 'morPerson') {
      person.co_bus_nm = item.businessName;
      person.co_estab_dt = transformDate(new Date(item.birthDateOrConstitution), 'YYYY-MM-DD').toString();

    } else if (beneficiaryType === 'fidPerson') {
      person.co_sspsv_cond = item.suspensiveCondition;
      person.co_ctrct_nmbr = item.contractNumber;
      person.co_ins_lttr_nmbr = item.instructionLetterNumber;
    }

    person.nationalities = [];
    person.Address = [];

    return person;
  }
}
