import React from "react";
import { DateTime } from "luxon";

type RelativeTimeProps = {
  time: Date;
};

export default function RelativeTime({ time }: RelativeTimeProps) {
  const date = DateTime.fromJSDate(time);

  return (
    <time dateTime={date.toISO()}>{date.toRelative({ style: "short" })}</time>
  );
}
