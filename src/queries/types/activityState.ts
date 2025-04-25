/**rah*/
export type ActivityState =
/** Activity is created */
  "CREATED" |
  /** Activity is active or in progress */
  "ACTIVE" |
  /** Activity is done */
  "COMPLETED" |
  /** Activity is ready to be started */
  "READY" |
  /** Activity is invalid */
  "INVALID" |
  /** Activity, like a set, has been called to start */
  "CALLED" |
  /** Activity is queued to run */
  "QUEUED"