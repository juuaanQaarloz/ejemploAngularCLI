import {BankAccount} from './bankJson/bankAccount';

export interface AccountJson {
  clct_id?: number;
  app_id?: number;
  clct_mthd_id?: string;
  clct_mthd_nm?: string;
  clct_card_typ_id?: string;
  clct_cncpt_id?: number;
  clct_cur_cd?: string;
  clct_empe_id?: string;
  clct_fed_enty_cd?: string;
  clct_mode_cd?: number;
  clct_unit_cd?: string;
  clct_unit_wrk_cntr_cd?: string;
  prfr_cntct_tm_txt?: string;
  prfr_cntct_typ_nm?: string;
  rtnr_id?: string;
  prfr_py_wk_day_cd?: string;
  prfr_py_prdcty_cd?: number;
  prfr_cntct_tm_cd?: string;
  prfr_cntct_typ_cd?: string;
  prfr_cntct_day?: string;
  rec_crt_ts?: string;
  rec_crt_usr_id?: string;
  rec_updt_ts?: string;
  rec_updt_usr_id?: string;
  rtnr_wrk_cntr_cd?: string;
  rtnr_lbr_rgm_cd?: string;
  bankAccount?: BankAccount;
}

export class AccountJsonClass implements AccountJson {
}
