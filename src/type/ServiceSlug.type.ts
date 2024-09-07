import { ServiceWebSiteSlugType } from './slug/serviceWebSiteSlug.type';
import { ServiceWebForumSlugType } from './slug/serviceWebForumSlug.type';
import { ServiceStoreCrownSlugType } from './slug/serviceStoreCrownSlug.type';
import { ServiceStoreEsoSlugType } from './slug/serviceStoreEsoSlug.type';
import { ServiceSystemAccountSlugType } from './slug/serviceSystemAccountSlug.type';

/**
 * Collection of slugs corresponding to the service
 */
export type ServiceSlug =
  | ServiceWebSiteSlugType
  | ServiceWebForumSlugType
  | ServiceStoreCrownSlugType
  | ServiceStoreEsoSlugType
  | ServiceSystemAccountSlugType;
