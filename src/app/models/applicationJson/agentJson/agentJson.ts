import {AgentCd} from './agentCd';

export interface AgentJson {
  app_id: number;
  agnt_cd: AgentCd;
  agnt_part_per: number;
  part_ord: number;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
  agnt_fmt_2_id: number;
}
