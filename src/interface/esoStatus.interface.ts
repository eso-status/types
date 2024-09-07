import { Moment } from 'moment';
import { Slug } from '../type/Slug.type';
import { Status } from '../type/Status.type';
import { Type } from '../type/Type.type';
import { Zone } from '../type/Zone.type';
import { Support } from '../type/Support.type';
import { EsoStatusMaintenance } from './esoStatusMaintenance.interface';
import { EsoStatusRawData } from './esoStatusRawData.interface';

/**
 * Format of an ESO server/service status
 */
export interface EsoStatus {
  /**
   * List of server/service information
   */
  rawData: EsoStatusRawData;
  /**
   * Status of the server/service
   */
  status: Status;
  /**
   * Date since the server/service has been in this status
   */
  statusSince: Moment;
  /**
   * Slug of the server/service
   */
  slug: Slug;
  /**
   * Type of the server/service
   */
  type: Type;
  /**
   * Support of the server/service
   */
  support: Support;
  /**
   * Zone of the server/service
   */
  zone: Zone;
  /**
   * Next maintenance of the server/service
   */
  maintenance?: EsoStatusMaintenance;
}
