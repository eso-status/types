import { RawEsoStatus } from './RawEsoStatus.interface';
import { MaintenanceEsoStatus } from './MaintenanceEsoStatus.interface';
import { Slug } from '../type/Slug.type';
import { Status } from '../type/Status.type';
import { Type } from '../type/Type.type';
import { Zone } from '../type/Zone.type';
import { Support } from '../type/Support.type';

export interface EsoStatus {
  slug: Slug;
  status: Status;
  maintenance?: MaintenanceEsoStatus;
  type: Type;
  support: Support;
  zone: Zone;
  raw: RawEsoStatus;
}
