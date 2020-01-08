import {AplicationPlanJson} from './planJson/aplicationPlanJson';
import {PolicyPlanJson} from './planJson/policyPlanJson';
import {InsuredQuestionnaireJson} from './questionaryJson/insuredQuestionnaireJson';
import {BeneciciaryJson} from './beneciciaryJson';

export class InsuredConditionJson {
  ins_id: number = null;
  per_app_id: number = null;
  app_id: number = null;
  aplicationPlan: AplicationPlanJson = null;
  policyPlan: PolicyPlanJson = null;
  insuredQuestionnaire: InsuredQuestionnaireJson[] = [];
  beneciciary: BeneciciaryJson[] = [];
  ins_role_cd: string = null;
  ins_rel_cd: number = null;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
}
