import { EuZoneType } from './zone/euZone.type';
import { NaZoneType } from './zone/naZone.type';
import { PtsZoneType } from './zone/ptsZone.type';

/**
 * Ensemble des zones de service/server
 */
export type ServerZone = EuZoneType | NaZoneType | PtsZoneType;
