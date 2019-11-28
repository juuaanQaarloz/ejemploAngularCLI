import {Address} from './../beneficiary-model/address';

export interface Formatwo {
  formatwoId: string;
  formatwoType: string;
  formatwoName: string;
  formatwoFatherLastName: string;
  formatwoMotherLastName: string;
  formatwoBirthDate: string;
  formatwoRfc: string;
  formatwoCurp: string;
  address?: Address;
  participation: string;

}
