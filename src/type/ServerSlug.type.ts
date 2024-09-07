import { ServerXboxNaSlugType } from './slug/serverXboxNaSlug.type';
import { ServerXboxEuSlugType } from './slug/serverXboxEuSlug.type';
import { ServerPsNaSlugType } from './slug/serverPsNaSlug.type';
import { ServerPsEuSlugType } from './slug/serverPsEuSlug.type';
import { ServerPcNaSlugType } from './slug/serverPcNaSlug.type';
import { ServerPcEuSlugType } from './slug/serverPcEuSlug.type';
import { ServerPcPtsSlugType } from './slug/serverPcPtsSlug.type';

/**
 * Collection of slugs corresponding to the server
 */
export type ServerSlug =
  | ServerXboxNaSlugType
  | ServerXboxEuSlugType
  | ServerPsNaSlugType
  | ServerPsEuSlugType
  | ServerPcNaSlugType
  | ServerPcEuSlugType
  | ServerPcPtsSlugType;
