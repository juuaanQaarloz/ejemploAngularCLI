import {AddressJson} from './addressJson';
import {BankTransaction} from './bankJson/bankTransaction';
import {DiseaseJson} from './diseaseJson';
import {NationalityJson} from './nationalityJson';
import {ContactPersonJson} from './contact/contactPersonJson';
import {DataContactJson} from './contact/dataContactJson';

export interface PersonJson {
  party_app_id: number;
  app_id: number;
  party_natl_id: string;
  party_ssn: string;
  per_brth_dt: string;
  per_age: number;
  Address: AddressJson[];
  diseases: DiseaseJson[];
  nationalities: NationalityJson[];
  contactPerson: ContactPersonJson[];
  dataContact: DataContactJson[];
  per_brth_cntry_nm: string;
  per_brth_cntry_cd: string;
  per_brth_stte_nm: string;
  per_brth_plc_nm: string;
  party_typ_cd: true;
  party_addl_typ_nm: string;
  per_card_num: string;
  per_card_typ_cd: string;
  per_card_typ_nm: string;
  per_card_emsr: string;
  per_per_id: string;
  per_sex_cd: string;
  per_mry_stts_cd: string;
  per_frst_nm: string;
  per_ptrnl_lst_nm: string;
  per_mtrnl_lst_nm: string;
  per_smok_ind: true;
  co_act_cd: string;
  co_act_nm: string;
  co_bus_nm: string;
  co_cmrc_nm: string;
  co_estab_dt: string;
  co_cmrc_bus_nm: string;
  co_cmrc_fol_nm: string;
  co_cmrc_add_inf: string;
  co_cmrc_rlshnshp: string;
  co_cmrc_ecnmcl_sctr_cd: string;
  co_cmrc_ecnmcl_sctr_nm: string;
  co_sspsv_cond: string;
  co_ctrct_nmbr: string;
  co_ins_lttr_nmbr: string;
  co_fid_rl: string;
  per_job_cd: string;
  per_job_nm: string;
  per_job_aka_nm: string;
  per_job_co_nm: string;
  per_job_mo_incm_amt: number;
  per_job_zip_cd: string;
  per_job_dtl_txt: string;
  per_job_co_actvty: string;
  per_job_co_ind_nm: string;
  per_wt_dscr: string;
  per_ht_dscr: string;
  per_lgl_frmt_nm: string;
  per_job_add_ind: true;
  per_job_add_cd: string;
  per_job_add_nm: string;
  per_job_add_aka_nm: string;
  per_job_add_mo_incm_amt: number;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
  natl_id_sgst_acpt_ind: boolean;
  per_card_emsr_cd: number;
  co_cmrc_rlshnshp_cd: number;
  co_cmrc_pblc_fig_ind: string;
  per_mdm_req: string;
  co_ctct_nm: string;
  co_ctct_occp: string;
}

