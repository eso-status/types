import { Moment } from 'moment';
/**
 * Slug type for ESO servers
 */
export type ServerSlug = 'server_xbox_na' | 'server_xbox_eu' | 'server_ps_na' | 'server_ps_eu' | 'server_pc_na' | 'server_pc_eu' | 'server_pc_pts';
/**
 * Support type for ESO servers
 */
export type ServerSupport = 'pc' | 'ps' | 'xbox';
/**
 * Zone type for ESO servers
 */
export type ServerZone = 'eu' | 'na' | 'pts';
/**
 * Slug type for ESO services
 */
export type ServiceSlug = 'service_web_site' | 'service_web_forum' | 'service_store_crown' | 'service_store_eso' | 'service_system_account';
/**
 * Support type for ESO services
 */
export type ServiceSupport = 'web' | 'store' | 'system';
/**
 * Zone type for ESO services
 */
export type ServiceZone = 'site' | 'forum' | 'eso' | 'crown' | 'account';
/**
 * Slug type for ESO servers/services
 */
export type Slug = ServerSlug | ServiceSlug | 'undefined';
/**
 * Status type for ESO servers/services
 */
export type Status = 'up' | 'down' | 'issues' | 'planned' | 'undefined';
/**
 * Support type for ESO servers/services
 */
export type Support = ServerSupport | ServiceSupport;
/**
 * Type for ESO servers/services
 */
export type Type = 'server' | 'service';
/**
 * Zone type for ESO servers/services
 */
export type Zone = ServerZone | ServiceZone;
/**
 * Data format for ESO server/service element
 */
export interface EsoStatus {
    /**
     * Slug of ESO server/service
     *
     * @type Slug
     */
    slug: Slug;
    /**
     * Status of ESO server/service
     *
     * @type Status
     */
    status: Status;
    /**
     * Data of next planned maintenance of ESO server/service
     *
     * @type MaintenanceEsoStatus
     */
    maintenance?: MaintenanceEsoStatus;
    /**
     * Type of ESO server/service
     *
     * @type Type
     */
    type: Type;
    /**
     * Support of ESO server/service
     *
     * @type Support
     */
    support: Support;
    /**
     * Zone of ESO server/service
     *
     * @type Zone
     */
    zone: Zone;
    /**
     * Raw data of ESO server/service
     *
     * @type RawEsoStatus
     */
    raw: RawEsoStatus;
}
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
    slug: Slug;
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
    rawStatus?: string;
}
