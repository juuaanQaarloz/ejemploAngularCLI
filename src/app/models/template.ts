import {Section} from './section';

export interface Template {
  id: string;
  product: string;
  version: string;
  sections: Section[];
}
