import {BeneciciaryJson} from '../beneciciaryJson';

export interface Cvr {
  cvr_cd: string;
  pln_cd: string;
  ins_id: number;
  app_id: number;
  cvr_nm: string;
  cvr_dt: string;
  beneciciary: BeneciciaryJson[];
  cvr_face_amt: number;
  cvr_cmplmntry_ind: boolean;
  job_rul_fctr_cd: string;
  job_xtra_prem_amt: number;
  lqdtn_typ_cd: boolean;
  med_xtra_prem_amt: number;
  med_rul_fctr_num: string;
  prem_amt: number;
  trm_cd: string;
  input_face_val_amt_typ_cd: number;
  opt_face_val_cd: string;
  opt_face_val_amt: number;
  ins_cvr_role_cd: string;
  cvr_bene_typ_nm: string;
  cvr_stts_cd: boolean;
  cvr_edit_ind: boolean;
  cvr_scrn_cd: string;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
  init_cvr_face_amt: number;
  init_prem_amt: number;
}
