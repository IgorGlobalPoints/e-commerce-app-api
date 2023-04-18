import * as uuid from 'uuid';

import { parse as uuidParse } from 'uuid';

export function stringToUuid(uuidStr: string): uuid.UUID {
  return uuidParse(uuidStr);
}
