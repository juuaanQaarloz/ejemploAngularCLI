import {Address} from './../beneficiary-model/address';

export interface Formattwo {
  formattwoId: string;
  formattwoType: string;
  name?: string;
  fatherLastName?: string;
  motherLastName?: string;
  birthDate: string;
  address: Address;

}
