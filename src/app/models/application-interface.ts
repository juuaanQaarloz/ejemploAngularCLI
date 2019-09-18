import {SectionInterface} from './section-interface';

export interface ApplicationInterface {
  id: string;
  product: string;
  version: string;
  sections: Array<SectionInterface>;
}
