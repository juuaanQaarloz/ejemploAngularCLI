import {Address} from './address';

export interface Beneficiary {
  beneficiaryId: string;
  beneficiaryType: string;
  name?: string;
  fatherLastName?: string;
  motherLastName?: string;
  birthDateOrConstitution: string;
  relationship: string;
  participationPercentage: string;
  addressSameAsTitular?: boolean;
  address: Address;
  businessName?: string;
  suspensiveCondition?: string;
  contractNumber?: string;
  instructionLetterNumber?: string;
}
