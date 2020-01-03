import {BeneciciaryJson} from '../beneciciaryJson';

export interface CoverageJson {
  inf_pol_cvr_id: number;
  rdr_cvr_cd: string;
  ins_inf_pol_pln_id: number;
  app_id: number;
  rdr_nm: string;
  rdr_face_val_amt: number;
  rdr_med_elec_med_rec_amt: number;
  rdr_py_mode: number;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
}
