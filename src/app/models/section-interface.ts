import {ContentInterface} from './content-interface';

export interface SectionInterface {
  id: string;
  idTemplate: string;
  title: string;
  content: ContentInterface;
  renderConditions: string;
}
