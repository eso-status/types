import { WebSupportType } from './support/webSupport.type';
import { StoreSupportType } from './support/storeSupport.type';
import { SystemSupportType } from './support/systemSupport.type';

/**
 * Collection of supports for servers
 */
export type ServiceSupport =
  | WebSupportType
  | StoreSupportType
  | SystemSupportType;
