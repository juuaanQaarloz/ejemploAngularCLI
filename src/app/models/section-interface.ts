import {ContentInterface} from './content-interface';

export interface SectionInterface {
  title: string;
  content: ContentInterface;
  renderConditions: string;
}
