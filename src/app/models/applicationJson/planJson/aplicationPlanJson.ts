import {Cvr} from '../coverageJson/cvr';
import {BeneciciaryJson} from '../beneciciaryJson';

export class AplicationPlanJson {
  pln_cd: string = '0';
  ins_id: number = 0;
  app_id: number = 0;
  pln_nm: string = null;
  coverage: Cvr[] = [];
  beneciciary: BeneciciaryJson[] = [];
  pln_crrncy_cd: string = null;
  pln_cvr_tp_cd: string = null;
  pln_bsc_cvr_ini_amnt: number = 0;
  pln_bsc_cvr_ini_amnt_ntl_crrcy: number = 0;
  pln_bsc_cvr_sv_gl: number = 0;
  pln_bsc_cvr_yrs: number = 0;
  pln_add_prime_amnt: number = 0;
  pln_fx_fnd_dist: number = 0;
  pln_vr_fnd_dist: number = 0;
  pln_fx_psnl_wthdrwl: number = 0;
  pln_vr_psnl_wthdrwl: number = 0;
  pln_fx_spcl_amnt_svgn: number = 0;
  pln_vr_spcl_amnt_svgn: number = 0;
  clm_mthd_cd: boolean = false;
  xs_prem_amt: number = 0;
  an_prem_amt: number = 0;
  mo_prem_disc_amt: number = 0;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
  pln_ins_cot_typ_id: string = null;
  pln_mthd_id: string = null;
  prfr_py_prdcty_cd: number = 0;
}

