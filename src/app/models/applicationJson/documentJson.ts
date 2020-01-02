export interface DocumentJson {
  doc_id: number;
  app_id: number;
  doc_party_rfr_id: number;
  doc_md_txt: string;
  doc_mgmt_file_id: string;
  doc_typ_cd: string;
  doc_sbtyp_cd: string;
  doc_class_cd: string;
  doc_cmnt_txt: string;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
  doc_rqr_dscr: string;
  doc_short_dscr: string;
  doc_lng_dscr: string;
  doc_dcl_rsn_txt: string;
  doc_stts: boolean;
}
