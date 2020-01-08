import {CoverageJson} from '../coverageJson/coverageJson';

export class PolicyPlanJson {
  ins_inf_pol_pln_id: number = null;
  pln_pol_id: number = null;
  ins_id: number = null;
  app_id: number = null;
  pol_app_dt: string = null;
  coverage: CoverageJson[] = null;
  pln_pol_cntrc_dt: string = null;
  pln_pol_med_elec_med_rec_amt: number = null;
  pln_pol_orig_cur_cd: string = null;
  pln_pol_pol_num: string = null;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
}
