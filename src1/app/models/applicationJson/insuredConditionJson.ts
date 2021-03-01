import {AplicationPlanJson} from './planJson/aplicationPlanJson';
import {PolicyPlanJson} from './planJson/policyPlanJson';
import {InsuredQuestionnaireJson} from './questionaryJson/insuredQuestionnaireJson';
import {BeneciciaryJson} from './beneciciaryJson';

export class InsuredConditionJson {
  ins_id: number = 0;
  per_app_id: number = 0;
  app_id: number = 0;
  aplicationPlan: AplicationPlanJson = new AplicationPlanJson();
  policyPlan: PolicyPlanJson = new PolicyPlanJson() ;
  insuredQuestionnaire: InsuredQuestionnaireJson[] = [];
  beneciciary: BeneciciaryJson[] = [];
  ins_role_cd: string = null;
  ins_rel_cd: number = 0;
  rec_crt_ts: string = null;
  rec_crt_usr_id: string = null;
  rec_updt_ts: string = null;
  rec_updt_usr_id: string = null;
}
