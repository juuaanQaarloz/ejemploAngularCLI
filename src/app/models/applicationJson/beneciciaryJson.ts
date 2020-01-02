import {PersonJson} from './personJson';

export interface BeneciciaryJson {
  cvr_bene_id: number;
  cvr_cd: string;
  pln_cd: string;
  ins_id: number;
  app_id: number;
  bene_tp_cd: string;
  bene_prtcp_pct: number;
  cvr_bene_cmnt_txt: string;
  bene_rel_cd: string;
  bene_rel_desc: string;
  bene_party_app_id: number;
  person: PersonJson;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
  bene_fid_cnd_flg: string;
  bene_fid_cntrc_nm: string;
  bene_fid_lttr_nm: string;
  bene_ref_inst_lttr: string;
  bene_addrss_sm_inss_ind: string;
}
