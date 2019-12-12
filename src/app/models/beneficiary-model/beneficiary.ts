import {Address} from './address';

export interface Beneficiary {
  beneficiaryId: string;
  beneficiaryType: string;
  name?: string;
  fatherLastName?: string;
  motherLastName?: string;
  relationship: string;
  birthDateOrConstitution: string;
  addressSameAsTitular?: boolean;
  address: Address;
  participationPercentage: string;
  businessName?: string;
  suspensiveCondition?: string;
  contractNumber?: string;
  instructionLetterNumber?: string;
}
