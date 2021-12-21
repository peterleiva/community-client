import React from "react";
import { DateTime } from "luxon";

type RelativeTimeProps = {
  time: DateTime;
};

export default function RelativeTime({ time }: RelativeTimeProps) {
  return (
    <time dateTime={time.toISODate()}>
      {time.toRelative({ style: "short" })}
    </time>
  );
}
