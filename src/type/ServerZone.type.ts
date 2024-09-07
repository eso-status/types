import { EuZoneType } from './zone/euZone.type';
import { NaZoneType } from './zone/naZone.type';
import { PtsZoneType } from './zone/ptsZone.type';

/**
 * Collection of service/server zones
 */
export type ServerZone = EuZoneType | NaZoneType | PtsZoneType;
