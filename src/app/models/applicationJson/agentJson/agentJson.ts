import {AgentCd} from './agentCd';

export class AgentJson {
  app_id?: number = null;
  agnt_cd?: AgentCd = new AgentCd();
  agnt_part_per?: number = null;
  part_ord?: number = null;
  rec_crt_ts?: string = null;
  rec_crt_usr_id?: string = null;
  rec_updt_ts?: string = null;
  rec_updt_usr_id?: string = null;
  agnt_fmt_2_id?: number = null;
}
