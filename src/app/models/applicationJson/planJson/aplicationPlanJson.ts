import {CoverageJson} from '../coverageJson/coverageJson';
import {Cvr} from '../coverageJson/cvr';
import {BeneciciaryJson} from '../beneciciaryJson';

export interface AplicationPlanJson {
  pln_cd: string;
  ins_id: number;
  app_id: number;
  coverage: Cvr[];
  beneciciary: BeneciciaryJson[];
  pln_crrncy_cd: string;
  pln_cvr_tp_cd: string;
  pln_bsc_cvr_ini_amnt: number;
  pln_bsc_cvr_ini_amnt_ntl_crrcy: number;
  pln_bsc_cvr_sv_gl: number;
  pln_bsc_cvr_yrs: number;
  pln_add_prime_amnt: number;
  pln_fx_fnd_dist: number;
  pln_vr_fnd_dist: number;
  pln_fx_psnl_wthdrwl: number;
  pln_vr_psnl_wthdrwl: number;
  pln_fx_spcl_amnt_svgn: number;
  pln_vr_spcl_amnt_svgn: number;
  clm_mthd_cd: boolean;
  xs_prem_amt: number;
  an_prem_amt: number;
  mo_prem_disc_amt: number;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
  pln_ins_cot_typ_id: string;
  pln_mthd_id: string;
  prfr_py_prdcty_cd: number;
}

