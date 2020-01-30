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
import {Cvr} from '../../models/applicationJson/coverageJson/cvr';
import {Subject} from 'rxjs';
import {forEachComment} from "tslint";

@Injectable({
  providedIn: 'root'
})
export class JsonApplicationService {

  appJson: ApplicationJson = new ApplicationJson();
  appJsonChange: Subject<ApplicationJson> = new Subject<ApplicationJson>();
  accountZero: AccountJson = new AccountJson();

  constructor(
    private appService: ApplicationService
  ) {
  }

  change(updateJsonApplication) {
    console.log('on Change: ', updateJsonApplication);
    this.appJsonChange.next(updateJsonApplication);
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
                } else if (field.type === 'select') {
                  // console.log('select additionalData: ', field.additionalData);
                  if (field.entity && field.additionalData !== undefined) {
                    set(this.appJson, field.entity, field.additionalData.name);
                  }
                } else if (field.type === 'autocomplete') {
                  // console.log('autocomplete additionalData: ', field.additionalData);
                  if (field.entity && field.additionalData !== undefined) {
                    value = field.additionalData.value;
                    set(this.appJson, field.entity, field.additionalData.name);
                  }
                }

                // setting value from FORM to JSON

                if (field.name === 'typePerson') {
                  console.log('value: ', value);
                }
                set(this.appJson, field.entityField, value);
                console.log('value: ', value);

              }
            }
          });
        } else if (contentFromStep.contentType.includes('table')) {
          this.mapTableToJson(contentFromStep.contentType, contentFromStep.contentTypeId);
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
                    } else if (field.type === 'select') {
                      // console.log('select additionalData: ', field.additionalData);
                      if (field.entity && field.additionalData !== undefined) {
                        set(this.appJson, field.entity, field.additionalData.name);
                      }
                    } else if (field.type === 'autocomplete') {
                      // console.log('autocomplete additionalData: ', field.additionalData);
                      if (field.entity && field.additionalData !== undefined) {
                        value = field.additionalData.value;
                        set(this.appJson, field.entity, field.additionalData.name);
                      }
                    }
                    // setting value from FORM to JSON
                    if (field.name === 'typePerson') {
                      console.log('value: ', value);
                    }
                    set(this.appJson, field.entityField, value);
                    console.log('value: ', value);
                  }
                }
              });
            } else if (contentChild.contentType.includes('table')) {
              this.mapTableToJson(contentChild.contentType, contentChild.contentTypeId);
            }
          });
        }
      });

      this.appJson.app_stts_cd = step.id;
      if (step.id === '1' || step.id === '4') {
        let resp = this.appService.getFormGroup().controls.typePerson.value;
      }

      return this.getAppJson();
    }
  }

  mapTableToJson(tableType: string, tableId?: string) {
    let items;
    console.log('tableType: ', tableType);
    if (tableType === 'table-beneficiary') {
      items = this.appService.beneficiaries.getValue();
      if (items.length > 0) {
        items.forEach((beneficiary, i) => {
          set(this.appJson, `insuredCondition.beneciciary[${i}]`, this.mapItem('beneficiary', beneficiary, i));
        });
      }
    } else if (tableType === 'table-agent') {
      items = this.appService.agents.getValue();
      if (items.length > 0) {
        items.forEach((agent, i) => {
          set(this.appJson, `agents[${i}]`, this.mapItem('agent', agent, i));
        });
      }
    } else if (tableType === 'table-payment') {
      items = this.appService.payments.getValue();
      if (items.length >= 0) {
        items.forEach((payment, i) => {
          if (i === 0) {
            set(this.appJson, 'accounts[0].bankAccount', this.mapItem('payment', payment, i));
          } else {
            set(this.appJson, `accounts[${i}]`, this.mapItem('payment', payment, i));
          }
        });
      }
    } else if (tableType === 'table-sports') {
      items = this.appService.sports.getValue();
      if (items.length > 0) {
        items.forEach((sport, i) => {
          set(this.appJson, `QuesList[${i}]`, this.mapItem('sport', sport, i));
        });
        // set(this.appJson, '', '');
      }
    } else if (tableType === 'table-diseases') {
      items = this.appService.diseases.getValue();
      let items2 = this.appService.diseases2.getValue();
      let items3 = this.appService.diseases3.getValue();

      if (items.length > 0) {
        items.forEach((disease, i) => {
          console.log('disease item: ', disease);
          set(this.appJson, `insured.diseases[${i}]`, this.mapItem('disease', disease, i));
        });
      }

      if (items2.length > 0) {
        items2.forEach((disease, i) => {
          console.log('disease item: ', disease);
          set(this.appJson, `insured.diseases[${i + items.length}]`, this.mapItem('disease', disease, i));
        });
      }

      if (items3.length > 0) {
        items3.forEach((disease, i) => {
          console.log('disease item: ', disease);
          set(this.appJson, `insured.diseases[${i + items.length + items2.length}]`, this.mapItem('disease', disease, i));
        });
      }

    } else if (tableType === 'table-country') {
      items = this.appService.countries.getValue();
      if (items.length > 0) {
        items.forEach((country, i) => {
          set(this.appJson, `foreignCountryTaxes[${i}]`, this.mapItem('country', country, i));
        });
      }
    } else if (tableType === 'table-coverage') {
      items = this.appService.coverages.getValue();
      if (items.length > 0) {
        set(this.appJson, `insuredCondition.aplicationPlan.pln_cd`, this.appService.currentPlan.getValue().PLAN);
        items.forEach((coverage, i) => {
          set(this.appJson, `<insuredCondition.aplicationPlan.coverage>[${i}]`, this.mapItem('coverage', coverage, i));
        });
      }
    }
  }

  mapItem(itemType, item, index) {
    if (itemType === 'agent') {
      let newAgent: AgentJson = new AgentJson();
      let newAgentCd: AgentCd = new AgentCd();

      newAgentCd.agnt_py_cd = item.key;
      newAgentCd.agnt_pmtr_cd = item.promotor;
      newAgentCd.agnt_party_nm = item.name;

      newAgent.app_id = this.appJson.app_id;
      newAgent.agnt_id = newAgentCd;
      newAgent.agnt_part_per = Number(item.participation);
      newAgent.part_ord = index;

      return newAgent;
    } else if (itemType === 'beneficiary') {
      let newBeneficiary: BeneciciaryJson = new BeneciciaryJson();

      console.log('item beneficiary: ', item);

      newBeneficiary.person = this.mapPersonBeneficiary(item.beneficiaryType, item);
      newBeneficiary.person.Address.push(this.mapAddressBeneficiary(item.beneficiaryType, item));
      newBeneficiary.bene_tp_cd = item.beneficiaryType;
      newBeneficiary.bene_rel_cd = item.relationshipCd;
      newBeneficiary.bene_rel_desc = item.relationship;

      newBeneficiary.bene_prtcp_pct = item.participationPercentage;
      newBeneficiary.bene_fid_cnd_flg = item.beneficiaryType === 'fidPerson' ? 'true' : null;
      newBeneficiary.bene_fid_cntrc_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : null;
      newBeneficiary.bene_fid_lttr_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : null;
      newBeneficiary.bene_ref_inst_lttr = item.beneficiaryType === 'fidPerson' ? item.instructionLetterNumber : null;
      newBeneficiary.bene_addrss_sm_inss_ind = item.addressSameAsTitular ? item.addressSameAsTitular : null;

      return newBeneficiary;
    } else if (itemType === 'payment') {
      let newAccount: AccountJson = new AccountJson();
      let newBanckAccount: BankAccount = new BankAccount();
      if (index === 0) {
        this.accountZero = this.appJson.accounts[0];
        if (item.txtClabe.length === 18) {
          newBanckAccount.std_bnk_cd = item.txtClabe;
        } else {
          newBanckAccount.bnk_acct_tkn_num = item.txtClabe;
        }
        newBanckAccount.pymnt_prrty = item.paymentId;
        newBanckAccount.bnk_nm = item.txtBank;

        return newBanckAccount;
      } else {
        newAccount = this.paymentIteratorZero(this.accountZero, index);

        newAccount.prfr_cntct_typ_nm = this.accountZero.prfr_cntct_typ_nm;
        if (item.txtClabe.length === 18) {
          newBanckAccount.std_bnk_cd = item.txtClabe;
        } else {
          newBanckAccount.bnk_acct_tkn_num = item.txtClabe;
        }

        newBanckAccount.pymnt_prrty = item.paymentId;
        newBanckAccount.bnk_nm = item.txtBank;

        newAccount.bankAccount = newBanckAccount;
        return newAccount;
      }

    } else if (itemType === 'sport') {
      let newQuesList = new QuesList();

      newQuesList.actvty_id = item.idSportActivity;
      newQuesList.clmn_1 = item.name;
      newQuesList.clmn_2 = item.periodicity;
      newQuesList.clmn_3 = item.description;

      return newQuesList;

    } else if (itemType === 'disease') {
      let newDisease = new DiseaseJson();

      newDisease.illnss_nm = item.name;
      newDisease.illnss_dt = transformDate(item.diagnosticDate, 'YYYY-MM-DD').toString();
      newDisease.illnss_drtn = item.duration;
      newDisease.illnss_hlth_stt = item.actualCondition;
      newDisease.party_app_id = this.appJson.insured.party_app_id;
      newDisease.app_id = this.appJson.app_id;
      newDisease.qstn_id = item.fromTable;

      return newDisease;
    } else if (itemType === 'country') {
      let newCountry: ForeignCountryTaxJson = new ForeignCountryTaxJson();

      newCountry.app_id = this.appJson.app_id;
      if (this.appJson.foreignCountryTaxes != null &&
        index < this.appJson.foreignCountryTaxes.length &&
        this.appJson.foreignCountryTaxes[index] != null) {
        newCountry.cntry_id = this.appJson.foreignCountryTaxes[index].cntry_id;
      }
      newCountry.cntry_cd = item.countryId;
      newCountry.cntry_nm = item.statCountry;
      newCountry.frgn_cntry_tin = item.taxCountryId;

      return newCountry;
    } else if (itemType === 'coverage') {
      let newCvr: Cvr = new Cvr();

      newCvr.pln_cd = item.planCode;
      newCvr.cvr_nm_cd = item.cvrC;
      newCvr.cvr_nm = item.cvrN;

      return newCvr;
    }
  }

  mapAddressBeneficiary(beneficiaryType: string, item: Beneficiary) {
    let address: AddressJson = new AddressJson();

    if (beneficiaryType === 'P') {
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

    } else if (beneficiaryType === 'M') {

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
    person.party_typ_cd = item.beneficiaryType;

    if (beneficiaryType === 'P') {
      person.per_brth_dt = transformDate(new Date(item.birthDateOrConstitution), 'YYYY-MM-DD').toString();
      person.per_age = calculateAge(item.birthDateOrConstitution);
      person.per_frst_nm = item.name;
      person.per_ptrnl_lst_nm = item.fatherLastName;
      person.per_mtrnl_lst_nm = item.motherLastName;

    } else if (beneficiaryType === 'M') {
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

  paymentIteratorZero(accountJson: AccountJson, index: number) {

    let newAccount: AccountJson = new AccountJson();

    newAccount.clct_mthd_id = accountJson.clct_mthd_id;
    newAccount.clct_mthd_nm = accountJson.clct_mthd_nm;
    newAccount.clct_cncpt_id = accountJson.clct_cncpt_id;
    newAccount.prfr_cntct_typ_cd = accountJson.prfr_cntct_typ_cd;
    newAccount.prfr_cntct_typ_nm = accountJson.prfr_cntct_typ_nm;
    newAccount.prfr_py_wk_day_cd = accountJson.prfr_py_wk_day_cd;
    newAccount.prfr_py_prdcty_cd = accountJson.prfr_py_prdcty_cd;
    newAccount.prfr_cntct_tm_cd = accountJson.prfr_cntct_tm_cd;
    newAccount.prfr_cntct_day = accountJson.prfr_cntct_day;

    return newAccount;
  }
}
