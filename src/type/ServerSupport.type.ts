import { PcSupportType } from './support/pcSupport.type';
import { PsSupportType } from './support/psSupport.type';
import { XboxSupportType } from './support/xboxSupport.type';

/**
 * Ensemble des supports des server
 */
export type ServerSupport = PcSupportType | PsSupportType | XboxSupportType;
