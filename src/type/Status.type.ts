import { UpStatusType } from './status/upStatus.type';
import { DownStatusType } from './status/downStatus.type';
import { IssuesStatusType } from './status/issuesStatus.type';
import { PlannedStatusType } from './status/plannedStatus.type';

/**
 * Ensemble des status de service/server
 */
export type Status =
  | UpStatusType
  | DownStatusType
  | IssuesStatusType
  | PlannedStatusType;
