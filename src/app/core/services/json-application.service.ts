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
    }
  }

  mapItem(itemType, item, index) {
    if (itemType === 'agent') {
      let newAgent: AgentJson = {};
      newAgent.app_id = this.appJson.app_id;
      newAgent.agnt_cd = {
        agnt_cd: item.key,
        agnt_py_cd: null,
        agnt_pmtr_cd: item.promotor,
        agnt_party_nm: item.name,
        rec_crt_ts: new Date().toDateString(),
        rec_crt_usr_id: null,
        rec_updt_ts: null,
        rec_updt_usr_id: null,
        agnt_mail: null
      };
      newAgent.agnt_part_per = Number(item.participation);
      newAgent.part_ord = index;
      newAgent.rec_crt_ts = new Date().toDateString();
      newAgent.rec_crt_usr_id = null;
      newAgent.rec_updt_ts = null;
      newAgent.agnt_fmt_2_id = null;

      return newAgent;
    } else if (itemType === 'beneficiary') {
      let newBeneficiary: BeneciciaryJson = {};
      newBeneficiary.cvr_bene_id = Number(item.beneficiaryId);
      newBeneficiary.cvr_cd = null;
      newBeneficiary.pln_cd = null;
      newBeneficiary.ins_id = null;
      newBeneficiary.app_id = this.appJson.app_id;
      newBeneficiary.bene_tp_cd = item.beneficiaryType;
      newBeneficiary.bene_prtcp_pct = item.participationPercentage;
      newBeneficiary.cvr_bene_cmnt_txt = null;
      newBeneficiary.bene_rel_cd = item.relationship;
      newBeneficiary.bene_rel_desc = null;
      newBeneficiary.bene_party_app_id = null;
      newBeneficiary.person = {
        party_app_id: this.appJson.insurer.party_app_id,
        app_id: this.appJson.app_id,
        party_natl_id: null,
        party_ssn: null,
        per_brth_dt: item.beneficiaryType === 'phyPerson' ? item.birthDateOrConstitution : null,
        per_age: item.beneficiaryType === 'phyPerson' ? calculateAge(item.birthDateOrConstitution) : null,
        Address: [
          {
            addrss_id: 0,
            app_id: this.appJson.app_id,
            per_id: this.appJson.insurer.party_app_id,
            strt_nm: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].strt_nm : item.address.street,
            ext_num: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].ext_num : item.address.exteriorNumber,
            int_num: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].int_num : item.address.interiorNumber,
            zip_cod: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].zip_cod : item.address.zipCode,
            subt_nm: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].zip_cod : item.address.neighborhood,
            towt_nm: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].towt_nm : item.address.city,
            sta_cod: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].sta_cod : item.address.state,
            sta_spec: null,
            cntry_cod: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].cntry_cod : item.address.country,
            cntry_spe: null,
            hom_phon: null,
            lab_phon: null,
            extt_num: null,
            cel_phon: null,
            per_mail_nm: null,
            lab_mail_nm: null,
            mncplty_nm: item.addressSameAsTitular === true ? this.appJson.insurer.Address[0].mncplty_nm : item.address.municipality,
            rec_crt_ts: new Date().toDateString(),
            rec_crt_usr_id: null,
            rec_updt_ts: null,
            rec_updt_usr_id: null,
          }
        ],
        diseases: [],
        nationalities: [],
        contactPerson: [],
        dataContact: [],
        per_brth_cntry_nm: null,
        per_brth_cntry_cd: null,
        per_brth_stte_nm: null,
        per_brth_plc_nm: null,
        party_typ_cd: item.beneficiaryType === 'phyPerson' ? true : false,
        party_addl_typ_nm: null,
        per_card_num: null,
        per_card_typ_cd: null,
        per_card_typ_nm: null,
        per_card_emsr: null,
        per_per_id: null,
        per_sex_cd: null,
        per_mry_stts_cd: null,
        per_frst_nm: null,
        per_ptrnl_lst_nm: null,
        per_mtrnl_lst_nm: null,
        per_smok_ind: null,
        co_act_cd: null,
        co_act_nm: null,
        co_bus_nm: null,
        co_cmrc_nm: null,
        co_estab_dt: null,
        co_cmrc_bus_nm: null,
        co_cmrc_fol_nm: null,
        co_cmrc_add_inf: null,
        co_cmrc_rlshnshp: null,
        co_cmrc_ecnmcl_sctr_cd: null,
        co_cmrc_ecnmcl_sctr_nm: null,
        co_sspsv_cond: null,
        co_ctrct_nmbr: null,
        co_ins_lttr_nmbr: null,
        co_fid_rl: null,
        per_job_cd: null,
        per_job_nm: null,
        per_job_aka_nm: null,
        per_job_co_nm: null,
        per_job_mo_incm_amt: null,
        per_job_zip_cd: null,
        per_job_dtl_txt: null,
        per_job_co_actvty: null,
        per_job_co_ind_nm: null,
        per_wt_dscr: null,
        per_ht_dscr: null,
        per_lgl_frmt_nm: null,
        per_job_add_ind: null,
        per_job_add_cd: null,
        per_job_add_nm: null,
        per_job_add_aka_nm: null,
        per_job_add_mo_incm_amt: null,
        rec_crt_ts: null,
        rec_crt_usr_id: null,
        rec_updt_ts: null,
        rec_updt_usr_id: null,
        natl_id_sgst_acpt_ind: null,
        per_card_emsr_cd: null,
        co_cmrc_rlshnshp_cd: null,
        co_cmrc_pblc_fig_ind: null,
        per_mdm_req: null,
        co_ctct_nm: null,
        co_ctct_occp: null,
      };
      newBeneficiary.rec_crt_ts = new Date().toDateString();
      newBeneficiary.rec_crt_usr_id = null;
      newBeneficiary.rec_updt_ts = null;
      newBeneficiary.rec_updt_usr_id = null;
      newBeneficiary.bene_fid_cnd_flg = item.beneficiaryType === 'fidPerson' ? '1' : '0';
      newBeneficiary.bene_fid_cntrc_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : null;
      newBeneficiary.bene_fid_lttr_nm = item.beneficiaryType === 'fidPerson' ? item.contractNumber : null;
      newBeneficiary.bene_ref_inst_lttr = item.beneficiaryType === 'fidPerson' ? item.instructionLetterNumber : null;
      newBeneficiary.bene_addrss_sm_inss_ind = item.addressSameAsTitular;

      return newBeneficiary;
    }
  }
}
