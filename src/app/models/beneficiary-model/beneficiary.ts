import {Address} from './address';

export interface Beneficiary {
  beneficiaryId: string;
  beneficiaryType: string;
  name?: string;
  fatherLastName?: string;
  motherLastName?: string;
  relationship: string;
  birthDateOrConstitution: string;
  address: Address;
  participationPercentage: string;
  bussinesName?: string;
  suspensiveCondition?: string;
  contractNumber?: string;
  instructionLetterNumber?: string;
}
