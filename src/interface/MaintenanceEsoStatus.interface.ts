import { RawEsoStatus } from './RawEsoStatus.interface';
import { Slug } from '../type/Slug.type';

export interface MaintenanceEsoStatus {
  raw: RawEsoStatus;
  slug: Slug;
  beginnerAt: string;
  endingAt?: string;
}
