import {AgentCd} from './agentCd';

export class AgentJson {
  app_id: number = 0;
  agnt_id: string = '';
  agnt_cd: AgentCd = new AgentCd();
  agnt_fmt_2_id: number = 0;
  agnt_part_per: number = 0;
  part_ord: number = 0;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = 'string';
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = 'string';

}
