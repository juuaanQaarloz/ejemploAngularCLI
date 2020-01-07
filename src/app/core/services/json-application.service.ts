import {Injectable} from '@angular/core';
import {ApplicationJson} from '../../models/applicationJson/applicationJson';
import {APP_SWAGGER} from '../mock/mock-swagger/mock-swagger-app';
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
import {DiseaseJson} from '../../models/applicationJson/diseaseJson';
import {NationalityJson} from '../../models/applicationJson/nationalityJson';
import {ContactPersonJson} from '../../models/applicationJson/contact/contactPersonJson';
import {DataContactJson} from '../../models/applicationJson/contact/dataContactJson';

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
    let items;
    console.log('tableType: ', tableType);
    if (tableType === 'table-beneficiary') {
      const beneficiaries = this.appService.beneficiaries.getValue();
      if (beneficiaries.length > 0) {
        console.log(' beneficiaries: ', beneficiaries);
        beneficiaries.forEach((beneficiary) => {
          console.log('beneficiary: ', beneficiary);
        });
      }
    } else if (tableType === 'table-agent') {
      console.log('onTableAgent');
      items = this.appService.agents.getValue();
      console.log('items: ', items);
      if (items.length > 0) {
        console.log('agents: ', items);
        items.forEach((agent, i) => {
          console.log('agent: ', agent);
          console.log('i: ', i);
          set(this.appJson, `agents[${i}]`, this.mapItem('agent', agent, i));
        });
      }
    }
  }

  mapItem(itemType, item, index) {
    if (itemType === 'agent') {
      let newAgent: AgentJson = {};
      newAgent.app_id = this.appJson.app_id;
      newAgent.agnt_cd = {
        agnt_cd: item.key,
        agnt_py_cd: 'codigoPago',
        agnt_pmtr_cd: item.promotor,
        agnt_party_nm: item.name,
        rec_crt_ts: new Date().toDateString(),
        rec_crt_usr_id: '',
        rec_updt_ts: '',
        rec_updt_usr_id: '',
        agnt_mail: 'a@a.com'
      };
      newAgent.agnt_part_per = Number(item.participation);
      newAgent.part_ord = index;
      newAgent.rec_crt_ts = new Date().toDateString();
      newAgent.rec_crt_usr_id = '';
      newAgent.rec_updt_ts = '';
      newAgent.agnt_fmt_2_id = 0;

      return newAgent;
    }
    /*else if (itemType === 'beneficiary') {
      let newBeneficiary: BeneciciaryJson = {};
      newBeneficiary.cvr_bene_id = Number(item.beneficiaryId);
      newBeneficiary.cvr_cd = '';
      newBeneficiary.pln_cd = '';
      newBeneficiary.ins_id = 0;
      newBeneficiary.app_id = this.appJson.app_id;
      newBeneficiary.bene_tp_cd = item.beneficiaryType;
      newBeneficiary.bene_prtcp_pct = item.participationPercentage;
      newBeneficiary.cvr_bene_cmnt_txt = '';
      newBeneficiary.bene_rel_cd = item.relationship;
      newBeneficiary.bene_rel_desc = '';
      newBeneficiary.bene_party_app_id = 0;
      newBeneficiary.person = {
        party_app_id: this.appJson.insurer.party_app_id,
        app_id: this.appJson.app_id,
        party_natl_id: 'string',
        party_ssn: 'string',
        per_brth_dt: 'string',
        per_age: item.beneficiaryType === 'phyPerson' ? calculateAge(item.birthDateOrConstitution) : 0,
        Address: [
          {
            addrss_id: 0,
            app_id: this.appJson.app_id,
            per_id: this.appJson.insurer.party_app_id,
      strt_nm: string,
      ext_num: string,
      int_num: string,
      zip_cod: string,
      subt_nm: string,
      towt_nm: string,
      sta_cod: string,
      sta_spec: string,
      cntry_cod: string,
      cntry_spe: string,
      hom_phon: string,
      lab_phon: string,
      extt_num: string,
      cel_phon: string,
      per_mail_nm: string,
      lab_mail_nm: string,
      mncplty_nm: string,
      rec_crt_ts: string,
      rec_crt_usr_id: string,
      rec_updt_ts: string,
      rec_updt_usr_id: string,
          }
        ],
        diseases: [],
        nationalities: [],
        contactPerson: [],
        dataContact: [],
        per_brth_cntry_nm: 'string',
        per_brth_cntry_cd: 'string',
        per_brth_stte_nm: 'string',
        per_brth_plc_nm: 'string',
        party_typ_cd: item.beneficiaryType === 'phyPerson' ? true : false,
        party_addl_typ_nm: 'string',
        per_card_num: 'string',
        per_card_typ_cd: 'string',
        per_card_typ_nm: 'string',
        per_card_emsr: 'string',
        per_per_id: 'string',
        per_sex_cd: true,
        per_mry_stts_cd: true,
        per_frst_nm: 'string',
        per_ptrnl_lst_nm: 'string',
        per_mtrnl_lst_nm: 'string',
        per_smok_ind: true,
        co_act_cd: 'string',
        co_act_nm: 'string',
        co_bus_nm: 'string',
        co_cmrc_nm: 'string',
        co_estab_dt: 'string',
        co_cmrc_bus_nm: 'string',
        co_cmrc_fol_nm: 'string',
        co_cmrc_add_inf: 'string',
        co_cmrc_rlshnshp: 'string',
        co_cmrc_ecnmcl_sctr_cd: 'string',
        co_cmrc_ecnmcl_sctr_nm: 'string',
        co_sspsv_cond: 'string',
        co_ctrct_nmbr: 'string',
        co_ins_lttr_nmbr: 'string',
        co_fid_rl: 'string',
        per_job_cd: 'string',
        per_job_nm: 'string',
        per_job_aka_nm: 'string',
        per_job_co_nm: 'string',
        per_job_mo_incm_amt: 0,
        per_job_zip_cd: 'string',
        per_job_dtl_txt: 'string',
        per_job_co_actvty: 'string',
        per_job_co_ind_nm: 'string',
        per_wt_dscr: 'string',
        per_ht_dscr: 'string',
        per_lgl_frmt_nm: 'string',
        per_job_add_ind: true,
        per_job_add_cd: 'string',
        per_job_add_nm: 'string',
        per_job_add_aka_nm: 'string',
        per_job_add_mo_incm_amt: 0,
        rec_crt_ts: 'string',
        rec_crt_usr_id: 'string',
        rec_updt_ts: 'string',
        rec_updt_usr_id: 'string',
        natl_id_sgst_acpt_ind: true,
        per_card_emsr_cd: 0,
        co_cmrc_rlshnshp_cd: 0,
        co_cmrc_pblc_fig_ind: 'string',
        per_mdm_req: 'string',
        co_ctct_nm: 'string',
        co_ctct_occp: 'string',
      };
      newBeneficiary.rec_crt_ts = new Date().toDateString();
      newBeneficiary.rec_crt_usr_id = '';
      newBeneficiary.rec_updt_ts = '';
      newBeneficiary.rec_updt_usr_id = '';
      newBeneficiary.bene_fid_cnd_flg = item.beneficiaryType === 'fidPerson' ? '1' : '0';
      newBeneficiary.bene_fid_cntrc_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : '';
      newBeneficiary.bene_fid_lttr_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : '';
      newBeneficiary.bene_ref_inst_lttr = item.beneficiaryType === 'fidPerson' ? item.instructionLetterNumber : '';
      newBeneficiary.bene_addrss_sm_inss_ind = item.addressSameAsTitular;
    }*/
  }
}
