import { RawEsoStatus } from './RawEsoStatus.interface';
import { Slug } from '../types/Slug.type';

/**
 * Data format for ESO server/service maintenance element
 */
export interface MaintenanceEsoStatus {
    /**
     * Raw data of ESO server/service maintenance
     *
     * @type RawEsoStatus
     */
    raw: RawEsoStatus;
    /**
     * Slug of ESO server/service maintenance
     *
     * @type Slug
     */
    slug: Slug,
    /**
     * Beginning date of ESO server/service maintenance
     *
     * @type string
     */
    beginnerAt: string;
    /**
     * Ending date of ESO server/service maintenance
     *
     * @type string
     */
    endingAt?: string;
}
