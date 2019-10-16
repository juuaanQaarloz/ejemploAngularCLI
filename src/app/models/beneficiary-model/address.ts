export interface Address {
  street: string;
  exteriorNumber: string;
  interiorNumber?: string; // optional
  zipCode: string;
  neighborhood: string;
  municipality: string;
  state: string;
  city: string;
  country: string;
}
