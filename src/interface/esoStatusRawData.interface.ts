import { Moment } from 'moment';
import { Support } from '../type/Support.type';
import { Zone } from '../type/Zone.type';
import { Type } from '../type/Type.type';
import { Slug } from '../type/Slug.type';
import { Status } from '../type/Status.type';

export interface EsoStatusRawData {
  source: string;
  raw: string;
  status: Status;
  rawStatus?: string;
  slug: Slug;
  rawSlug: string;
  type: Type;
  support: Support;
  zone: Zone;
  dates?: Moment[];
  rawDate?: string;
}
