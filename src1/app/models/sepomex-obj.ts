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
  street: string;  // *
  interiorNumber: string;  // *
  exteriorNumber: string;  // *
  stateId: string;  // *
  zipCode: string;  // *
  settlement: string;  // *
  settlementType: string;  // *
  townHall: string;  // *
  state: string;  // *
  zoneType: string;  // *
}
