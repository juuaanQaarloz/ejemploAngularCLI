import {CoverageJson} from '../coverageJson';

export interface PolicyPlanJson {
  ins_inf_pol_pln_id: number;
  pln_pol_id: number;
  ins_id: number;
  app_id: number;
  pol_app_dt: string;
  coverage: CoverageJson[];
  pln_pol_cntrc_dt: string;
  pln_pol_med_elec_med_rec_amt: number;
  pln_pol_orig_cur_cd: string;
  pln_pol_pol_num: string;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
}
