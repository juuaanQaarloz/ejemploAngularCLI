import {Address} from './../beneficiary-model/address';

export interface Formatwo {
  formatwoId: string;
  formatwoType: string;
  name?: string;
  fatherLastName?: string;
  motherLastName?: string;
  birthDate?: string;
  address?: Address;

}
