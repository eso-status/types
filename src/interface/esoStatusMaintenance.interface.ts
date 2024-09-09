import { Moment } from 'moment';
import { EsoStatusRawData } from './esoStatusRawData.interface';

/**
 * Format of an ESO server/service maintenance
 */
export interface EsoStatusMaintenance {
  /**
   * List of information about the server/service(s) affected by this maintenance
   */
  rawDataList: EsoStatusRawData[];
  /**
   * Start date and time of the maintenance
   */
  beginnerAt: Moment;
  /**
   * End date and time of the maintenance
   */
  endingAt?: Moment;
  /**
   * Date since the server/service maintenance has been planned
   */
  plannedSince: Moment;
}
