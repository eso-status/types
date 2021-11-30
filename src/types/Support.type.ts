import { ServerSupport } from './ServerSupport.type';
import { ServiceSupport } from './ServiceSupport.type';

/**
 * Support type for ESO servers/services
 */
export type Support =
  | ServerSupport
  | ServiceSupport;
