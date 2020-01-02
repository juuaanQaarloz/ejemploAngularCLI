import {AplicationPlanJson} from './planJson/aplicationPlanJson';
import {PolicyPlanJson} from './planJson/policyPlanJson';
import {InsuredQuestionnaireJson} from './questionaryJson/insuredQuestionnaireJson';
import {BeneciciaryJson} from './beneciciaryJson';

export interface InsuredConditionJson {
  ins_id: number;
  per_app_id: number;
  app_id: number;
  aplicationPlan: AplicationPlanJson;
  policyPlan: PolicyPlanJson;
  insuredQuestionnaire: InsuredQuestionnaireJson[];
  beneciciary: BeneciciaryJson[];
  ins_role_cd: string;
  ins_rel_cd: number;
  rec_crt_ts: string;
  rec_crt_usr_id: string;
  rec_updt_ts: string;
  rec_updt_usr_id: string;
}
