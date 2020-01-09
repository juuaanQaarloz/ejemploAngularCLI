import {Cvr} from '../coverageJson/cvr';
import {BeneciciaryJson} from '../beneciciaryJson';

export class AplicationPlanJson {
  pln_cd: string = null;
  ins_id: number = null;
  app_id: number = null;
  coverage: Cvr[] = [];
  beneciciary: BeneciciaryJson[] = [];
  pln_crrncy_cd: string = null;
  pln_cvr_tp_cd: string = null;
  pln_bsc_cvr_ini_amnt: number = null;
  pln_bsc_cvr_ini_amnt_ntl_crrcy: number = null;
  pln_bsc_cvr_sv_gl: number = null;
  pln_bsc_cvr_yrs: number = null;
  pln_add_prime_amnt: number = null;
  pln_fx_fnd_dist: number = null;
  pln_vr_fnd_dist: number = null;
  pln_fx_psnl_wthdrwl: number = null;
  pln_vr_psnl_wthdrwl: number = null;
  pln_fx_spcl_amnt_svgn: number = null;
  pln_vr_spcl_amnt_svgn: number = null;
  clm_mthd_cd: boolean = null;
  xs_prem_amt: number = null;
  an_prem_amt: number = null;
  mo_prem_disc_amt: number = null;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
  pln_ins_cot_typ_id: string = null;
  pln_mthd_id: string = null;
  prfr_py_prdcty_cd: number = null;
}

