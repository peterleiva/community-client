import { DateTime } from "luxon";

export interface mapperDTO<TData, TObject> {
  toObject(data: TData): TObject;
}

export function fromISODate(date?: string): DateTime | undefined {
  if (typeof date === "string") {
    return DateTime.fromISO(date);
  } else {
    return undefined;
  }
}
