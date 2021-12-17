import React from "react";
import { DateTime } from "luxon";

type RelativeTimeProps = {
  time: Date;
};

export default function RelativeTime({ time }: RelativeTimeProps) {
  const date = DateTime.fromJSDate(time);

  return (
    <time dateTime={date.toISODate()}>
      {date.toRelative({ style: "short" })}
    </time>
  );
}
