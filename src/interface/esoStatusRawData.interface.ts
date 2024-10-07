import { Support } from '../type/Support.type';
import { Zone } from '../type/Zone.type';
import { Type } from '../type/Type.type';
import { Slug } from '../type/Slug.type';
import { Status } from '../type/Status.type';

/**
 * Raw data of an ESO server/service status
 */
export interface EsoStatusRawData {
  /**
   * URL of the data source
   */
  source: string;
  /**
   * Raw data used to identify the server/service and its status
   */
  raw: string;
  /**
   * Status of the server/service
   */
  status: Status;
  /**
   * Raw data used to identify the status
   */
  rawStatus?: string;
  /**
   * Slug of the server/service
   */
  slug: Slug;
  /**
   * Raw data used to identify the slug
   */
  rawSlug: string;
  /**
   * Type of the server/service
   */
  type: Type;
  /**
   * Support of the server/service
   */
  support: Support;
  /**
   * Zone of the server/service
   */
  zone: Zone;
  /**
   * List of dates contained in the announcement (ISO 8601)
   */
  dates?: string[];
  /**
   * Raw data of the date contained in the announcement
   */
  rawDate?: string;
}
