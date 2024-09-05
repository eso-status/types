import { WebSupportType } from './support/webSupport.type';
import { StoreSupportType } from './support/storeSupport.type';
import { SystemSupportType } from './support/systemSupport.type';

/**
 * Ensemble des supports des server
 */
export type ServiceSupport =
  | WebSupportType
  | StoreSupportType
  | SystemSupportType;
