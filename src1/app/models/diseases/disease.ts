export interface Disease {
  idDisease: string;
  name: string;
  diagnosticDate: string;
  duration: string;
  actualCondition: string;
  hasQuestionnaire: boolean;
  idQuestionnaire?: string;
  fromTable: string;
}
