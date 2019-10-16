import {Address} from './address';

export interface Beneficiary {
  beneficiaryId: string;
  beneficiaryType: string;
  name: string;
  fatherLastName: string;
  motherLastName: string;
  relationship: string;
  birthDate: string;
  address: Address;
  participationPercentage: number;
  suspensiveCondition?: string;
  contractNumber?: string;
  instructionLetterNumber?: string;
  fiduciaryRelationship?: string;
  constitutionDate?: string;
}
