import { PcSupportType } from './support/pcSupport.type';
import { PsSupportType } from './support/psSupport.type';
import { XboxSupportType } from './support/xboxSupport.type';

/**
 * Collection of supports for servers
 */
export type ServerSupport = PcSupportType | PsSupportType | XboxSupportType;
