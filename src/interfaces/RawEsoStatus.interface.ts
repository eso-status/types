import { Moment } from 'moment';
import { Slug } from '../types/Slug.type';
import { Type } from '../types/Type.type';
import { Support } from '../types/Support.type';
import { Zone } from '../types/Zone.type';
import { Status } from '../types/Status.type';

/**
 * Data format for ESO server/service raw element
 */
export interface RawEsoStatus {
    /**
     * Sources list of ESO server/service
     *
     * @type string[]
     */
    sources: string[];
    /**
     * Raw data list of ESO server/service
     *
     * @type string[]
     */
    raw: string[];
    /**
     * Slugs list of ESO server/service
     *
     * @type Slug[]
     */
    slugs?: Slug[];
    /**
     * Raw date of ESO server/service
     *
     * @type string
     */
    rawDate?: string;
    /**
     * Raw data of ESO server/service
     *
     * @type string
     */
    rawData?: string;
    /**
     * Dates list of ESO server/service
     *
     * @type Moment[]
     */
    dates?: Moment[];
    /**
     * Type of ESO server/service
     *
     * @type Type
     */
    type?: Type;
    /**
     * Support of ESO server/service
     *
     * @type Support
     */
    support?: Support;
    /**
     * Zone of ESO server/service
     *
     * @type Zone
     */
    zone?: Zone;
    /**
     * Status of ESO server/service
     *
     * @type Status
     */
    status?: Status;
    /**
     * Raw slug of ESO server/service
     *
     * @type string
     */
    rawSlug?: string;
    /**
     * Raw status of ESO server/service
     *
     * @type string
     */
    rawStatus?: string
}
