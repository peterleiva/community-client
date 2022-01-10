import { DateTime } from "luxon";

export function fromISODate(date?: string): DateTime | undefined {
  if (typeof date === "string") {
    return DateTime.fromISO(date);
  } else {
    return undefined;
  }
}
