import { Slug } from '../types/Slug.type';
import { Type } from '../types/Type.type';
import { Support } from '../types/Support.type';
import { Zone } from '../types/Zone.type';
import { Status } from '../types/Status.type';
import { RawEsoStatus } from './RawEsoStatus.interface';
import { MaintenanceEsoStatus } from './MaintenanceEsoStatus.interface';

/**
 * Data format for ESO server/service element
 */
export interface EsoStatus {
    /**
     * Slug of ESO server/service
     *
     * @type Slug
     */
    slug: Slug,
    /**
     * Status of ESO server/service
     *
     * @type Status
     */
    status: Status,
    /**
     * Data of next planned maintenance of ESO server/service
     *
     * @type MaintenanceEsoStatus
     */
    maintenance?: MaintenanceEsoStatus,
    /**
     * Type of ESO server/service
     *
     * @type Type
     */
    type: Type,
    /**
     * Support of ESO server/service
     *
     * @type Support
     */
    support: Support,
    /**
     * Zone of ESO server/service
     *
     * @type Zone
     */
    zone: Zone,
    /**
     * Raw data of ESO server/service
     *
     * @type RawEsoStatus
     */
    raw: RawEsoStatus
}
