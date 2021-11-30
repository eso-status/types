import { ServerZone } from './ServerZone.type';
import { ServiceZone } from './ServiceZone.type';

/**
 * Zone type for ESO servers/services
 */
export type Zone =
  | ServerZone
  | ServiceZone;
