import {AgentJson} from './agentJson/agentJson';
import {FormatJson} from './formatJson/formatJson';
import {QuesList} from './questionaryJson/quesList';
import {QuesAns} from './questionaryJson/quesAns';
import {AccountJson} from './accountJson';
import {ForeignCountryTaxJson} from './foreignCountryTaxJson';
import {ExtraDataJson} from './extraDataJson';
import {DocumentJson} from './documentJson';
import {PersonJson} from './personJson';
import {InsuredConditionJson} from './insuredConditionJson';
import {ApplicationExtensionJson} from './applicationExtensionJson';
import {ShareHolderApp} from './shareHolderApp';

export class ApplicationJson {
  app_id: number = null;
  agents: AgentJson[] = [];
  Format: FormatJson[] = [];
  QuesList: QuesList[] = [];
  QuesAns: QuesAns[] = [];
  insured: PersonJson = new PersonJson();
  insurer: PersonJson = new PersonJson();
  shareHolders: ShareHolderApp[] = [new ShareHolderApp(), new ShareHolderApp()];
  accounts: AccountJson[] = [];
  foreignCountryTaxes: ForeignCountryTaxJson[] = [];
  extraData: ExtraDataJson[] = [];
  applicationExtension: ApplicationExtensionJson = new ApplicationExtensionJson();
  documents: DocumentJson[] = [];
  insuredCondition: InsuredConditionJson = new InsuredConditionJson();
  app_bsns_ln_id: string = null;
  app_prdct_id: string = null;
  app_typ_cd: boolean = null;
  app_bus_typ_cd: string = null;
  app_dcn_num: string = null;
  app_phys_fol_num: string = null;
  app_st_pa: number = null;
  app_stts_cd: string = null;
  app_ctrl_num: string = null;
  app_pol_num: string = null;
  app_input_dt: string = null;
  app_crt_dt: string = null;
  app_rcpt_dt: string = null;
  app_eff_dt: string = null;
  app_guard_box_ind: boolean = null;
  app_own_tp_ind: boolean = null;
  app_own_card_num: string = null;
  app_own_card_typ_cd: string = null;
  app_own_card_typ_cd_id: boolean = null;
  app_own_card_subtyp_cd_id: boolean = null;
  app_own_card_emsr: string = null;
  app_own_card_rvw_ind: boolean = null;
  app_own_fin_prvd_ind: boolean = null;
  app_own_age_in_yr: number = null;
  app_own_frgn_cntrc_rsn_txt: string = null;
  app_own_ptrmnl_bond_ind: boolean = null;
  app_own_py_frgn_tax_ind: boolean = null;
  app_own_pltcl_dclr_ind: boolean = null;
  app_own_frng_ind: boolean = null;
  app_own_frng_spec: string = null;
  app_own_shre_ind: boolean = null;
  app_own_thrd_prty_ind: boolean = null;
  app_own_pymnt_rdrc_ind: boolean = null;
  app_own_rcv_email_ind: boolean = null;
  app_own_oth_lif_ins_ind: boolean = null;
  app_own_oth_lif_ins_nm: string = null;
  app_own_oth_lif_indamnt: number = null;
  app_ruse_priv_0_ind: boolean = null;
  app_ruse_priv_1_ind: boolean = null;
  app_ruse_priv_2_ind: boolean = null;
  chnl_cd: boolean = null;
  agnt_cd: string = null;
  vnd_ctrl_num: string = null;
  vnd_full_nm: string = null;
  vnd_wrk_plc_nm: string = null;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
  promo_ofc_cmnt_txt: string = null;
  intactn_msg_txt: string = null;
  bpm_prcss_instnc_id: string = null;
  aura_fnl_rspns_cd: string = null;
  aura_fnl_rspns_txt: string = null;
  app_rjct_txt: string = null;
  app_add_commts: string = null;
}
