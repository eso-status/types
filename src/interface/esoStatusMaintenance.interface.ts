import { Moment } from 'moment';
import { EsoStatusRawData } from './esoStatusRawData.interface';

export interface EsoStatusMaintenance {
  rawDataList: EsoStatusRawData[];
  beginnerAt: Moment;
  endingAt?: Moment;
}
