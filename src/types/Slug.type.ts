import { ServerSlug } from './ServerSlug.type';
import { ServiceSlug } from './ServiceSlug.type';

/**
 * Slug type for ESO servers/services
 */
export type Slug =
  | ServerSlug
  | ServiceSlug
  | 'undefined';
