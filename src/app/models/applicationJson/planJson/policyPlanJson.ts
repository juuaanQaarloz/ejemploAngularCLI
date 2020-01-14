import {CoverageJson} from '../coverageJson/coverageJson';

export class PolicyPlanJson {
  ins_inf_pol_pln_id: number = 0;
  pln_pol_id: number = 0;
  ins_id: number = 0;
  app_id: number = 0;
  pol_app_dt: string = '2020-01-03';
  coverage: CoverageJson[] = [];
  pln_pol_cntrc_dt: string = '2020-01-03';
  pln_pol_med_elec_med_rec_amt: number = 0;
  pln_pol_orig_cur_cd: string = null;
  pln_pol_pol_num: string = null;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
}
