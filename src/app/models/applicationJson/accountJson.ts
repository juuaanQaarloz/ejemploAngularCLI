import {BankAccount} from './bankJson/bankAccount';

export class AccountJson {
  clct_id: number = 0;
  app_id: number = 0;
  clct_mthd_id: string = '0';
  clct_mthd_nm: string = null;
  clct_card_typ_id: string = '0';
  clct_cncpt_id: number = 0;
  clct_cur_cd: string = null;
  clct_empe_id: string = '0';
  clct_fed_enty_cd: string = null;
  clct_mode_cd: number = null;
  clct_unit_cd: string = null;
  clct_unit_wrk_cntr_cd: string = null;
  prfr_cntct_tm_txt: string = null;
  prfr_cntct_typ_nm: string = null;
  rtnr_id: string = '0';
  prfr_py_wk_day_cd: string = null;
  prfr_py_prdcty_cd: number = null;
  prfr_cntct_tm_cd: string = null;
  prfr_cntct_typ_cd: string = null;
  prfr_cntct_day: string = null;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
  rtnr_wrk_cntr_cd: string = null;
  rtnr_lbr_rgm_cd: string = null;
  bankAccount: BankAccount = new BankAccount();
}

