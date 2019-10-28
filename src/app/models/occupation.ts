export interface Occupation {
  id: number;
  specificOccupationName: string;
  specificOccupationAlias: string;
  specificOccupationCode: number;
  companyName: string | null;
  ocupationZipCode: string | null;
  occupationDetails: string | null;
  occupationIncome: string | null;
}
