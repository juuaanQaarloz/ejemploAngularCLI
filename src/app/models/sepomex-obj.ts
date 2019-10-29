import {SepomexExtension} from './sepomex-extension';

export interface SepomexObj {
  number: string;
  typeCode: string;
  addressLine1: string;
  addressLine2: string;
  city: string; // ciudad
  postalCode: string;
  stateCode: string;
  stateDescription: string; // estado / provincia
  countryCode: string;
  extension: SepomexExtension;
}
