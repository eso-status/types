import { Moment } from 'moment';
import { EsoStatusRawData } from './esoStatusRawData.interface';

/**
 * Format d'une maintenance d'un server/service ESO
 */
export interface EsoStatusMaintenance {
  /**
   * Liste des informations sur le/les server/service concerné par cette maintenance
   */
  rawDataList: EsoStatusRawData[];
  /**
   * Date et heure de début de la maintenance
   */
  beginnerAt: Moment;
  /**
   * Date et heure de fin de la maintenance
   */
  endingAt?: Moment;
}
