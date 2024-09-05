import { Moment } from 'moment';
import { Support } from '../type/Support.type';
import { Zone } from '../type/Zone.type';
import { Type } from '../type/Type.type';
import { Slug } from '../type/Slug.type';
import { Status } from '../type/Status.type';

export interface RawEsoStatus {
  sources: string;
  raw: string;
  slug: Slug;
  rawDate?: string;
  dates?: Moment[];
  type: Type;
  support: Support;
  zone: Zone;
  status: Status;
  rawSlug: string;
  rawStatus?: string;
}
