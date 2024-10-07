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
   * Start date and time of the maintenance (ISO 8601)
   */
  beginnerAt: string;
  /**
   * End date and time of the maintenance (ISO 8601)
   */
  endingAt?: string;
  /**
   * Date since the server/service maintenance has been planned (ISO 8601)
   */
  plannedSince: string;
}
