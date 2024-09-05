import { Moment } from 'moment';
import { Slug } from '../type/Slug.type';
import { Status } from '../type/Status.type';
import { Type } from '../type/Type.type';
import { Zone } from '../type/Zone.type';
import { Support } from '../type/Support.type';
import { EsoStatusMaintenance } from './esoStatusMaintenance.interface';
import { EsoStatusRawData } from './esoStatusRawData.interface';

/**
 * Format du status d'un server/service ESO
 */
export interface EsoStatus {
  /**
   * Liste des informations du server/service
   */
  rawData: EsoStatusRawData;
  /**
   * Status du server/service
   */
  status: Status;
  /**
   * Date depuis la quel le server/service est à ce status
   */
  statusSince: Moment;
  /**
   * Slug du server/service
   */
  slug: Slug;
  /**
   * Type du server/service
   */
  type: Type;
  /**
   * Support du server/service
   */
  support: Support;
  /**
   * Zone du server/service
   */
  zone: Zone;
  /**
   * Prochaine maintenance du server/service
   */
  maintenance?: EsoStatusMaintenance;
}
