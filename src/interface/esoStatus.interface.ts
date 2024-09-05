import { Moment } from 'moment';
import { Slug } from '../type/Slug.type';
import { Status } from '../type/Status.type';
import { Type } from '../type/Type.type';
import { Zone } from '../type/Zone.type';
import { Support } from '../type/Support.type';
import { EsoStatusMaintenance } from './esoStatusMaintenance.interface';
import { EsoStatusRawData } from './esoStatusRawData.interface';

export interface EsoStatus {
  rawData: EsoStatusRawData;
  status: Status;
  statusSince: Moment;
  slug: Slug;
  type: Type;
  support: Support;
  zone: Zone;
  maintenance?: EsoStatusMaintenance;
}
