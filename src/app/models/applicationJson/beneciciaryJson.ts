import {PersonJson} from './personJson';

export class BeneciciaryJson {
  cvr_bene_id?: number = null;
  cvr_cd?: string = null;
  pln_cd?: string = null;
  ins_id?: number = null;
  app_id?: number = null;
  bene_tp_cd?: string = null;
  bene_prtcp_pct?: number = null;
  cvr_bene_cmnt_txt?: string = null;
  bene_rel_cd?: string = null;
  bene_rel_desc?: string = null;
  bene_party_app_id?: number = null;
  person?: PersonJson = null;
  rec_crt_ts?: string = null;
  rec_crt_usr_id?: string = null;
  rec_updt_ts?: string = null;
  rec_updt_usr_id?: string = null;
  bene_fid_cnd_flg?: string = null;
  bene_fid_cntrc_nm?: string = null;
  bene_fid_lttr_nm?: string = null;
  bene_ref_inst_lttr?: string = null;
  bene_addrss_sm_inss_ind?: string = null;
}
