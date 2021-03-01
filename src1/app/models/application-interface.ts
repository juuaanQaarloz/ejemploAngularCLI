import {Section} from './section';

export interface ApplicationInterface {
  id: string;
  product: string;
  version: string;
  sections: Array<Section>;
}
