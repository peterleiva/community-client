import React from "react";

type NumberFormatCompactProps = {
  value: number;
  zeroToken?: string;
};

export default function NumberFormatCompact({
  value,
  zeroToken,
}: NumberFormatCompactProps) {
  const formatter = Intl.NumberFormat(undefined, { notation: "compact" });

  return <span>{value === 0 ? zeroToken ?? 0 : formatter.format(value)}</span>;
}
