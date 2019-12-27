export interface Occupation {
  id: number;
  specificOccupationName: string;
  name: string;
  specificOccupationAlias: string;
  specificOccupationCode: number;
  companyName: string | null;
  ocupationZipCode: string | null;
  occupationDetails: string | null;
  description: string | null;
  occupationIncome: string | null;
}
