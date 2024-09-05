import { Moment } from 'moment';
import { Support } from '../type/Support.type';
import { Zone } from '../type/Zone.type';
import { Type } from '../type/Type.type';
import { Slug } from '../type/Slug.type';
import { Status } from '../type/Status.type';

/**
 * Donnée brute du status d'un server/service ESO
 */
export interface EsoStatusRawData {
  /**
   * URL de la source de la donnée
   */
  source: string;
  /**
   * Donnée brute permettant d'identifier le server/service et son status
   */
  raw: string;
  /**
   * Status du server/service
   */
  status: Status;
  /**
   * Donnée brute ayant permis d'identifier le status
   */
  rawStatus?: string;
  /**
   * Slug du server/service
   */
  slug: Slug;
  /**
   * Donnée brute ayant permis d'identifier le slug
   */
  rawSlug: string;
  /**
   * Type du server/service
   */
  type: Type;
  /**
   * Support du server/service
   */
  support: Support;
  /**
   * Zone du server/service
   */
  zone: Zone;
  /**
   * Liste des dates contenue dans l'annonce
   */
  dates?: Moment[];
  /**
   * Donnée brute de la date contenue dans l'annonce
   */
  rawDate?: string;
}
