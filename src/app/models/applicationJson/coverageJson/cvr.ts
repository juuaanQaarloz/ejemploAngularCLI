import {BeneciciaryJson} from '../beneciciaryJson';

export class Cvr {
  cvr_id: string =  null;
  cvr_cd: string = '0';
  pln_id: string = '0';
  pln_cd: string = '0';
  ins_id: number = 0;
  app_id: number = 0;
  cvr_nm_cd: string = null;
  cvr_nm: string = null;
  cvr_dt: string = '2020-01-03';
  beneciciary: BeneciciaryJson[] = [];
  cvr_face_amt: number = null;
  cvr_cmplmntry_ind: boolean = false;
  job_rul_fctr_cd: string = null;
  job_xtra_prem_amt: number = 0;
  lqdtn_typ_cd: boolean = false;
  med_xtra_prem_amt: number = 0;
  med_rul_fctr_num: string = null;
  prem_amt: number = 0;
  trm_cd: string = null;
  input_face_val_amt_typ_cd: number = 0;
  opt_face_val_cd: string = null;
  opt_face_val_amt: number = 0;
  ins_cvr_role_cd: string = null;
  cvr_bene_typ_nm: string = null;
  cvr_stts_cd: boolean = false;
  cvr_edit_ind: boolean = false;
  cvr_scrn_cd: string = null;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
  init_cvr_face_amt: number = 0;
  init_prem_amt: number = 0;
}
