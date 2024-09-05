import { SiteZoneType } from './zone/siteZone.type';
import { ForumZoneType } from './zone/forumZone.type';
import { CrownZoneType } from './zone/crownZone.type';
import { EsoZoneType } from './zone/esoZone.type';
import { AccountZoneType } from './zone/accountZone.type';

/**
 * Ensemble des zones des services
 */
export type ServiceZone =
  | SiteZoneType
  | ForumZoneType
  | EsoZoneType
  | CrownZoneType
  | AccountZoneType;
