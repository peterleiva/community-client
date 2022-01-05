enum SizeMap {
  nano = 4,
  alfa = 4,

  micro = 8,
  bravo = 8,

  xxxs = 12,
  charlie = 12,

  tiny = 24,
  xxs = 24,
  delta = 24,

  xs = 36,
  extra_small = 36,
  echo = 36,

  sm = 48,
  small = 48,
  foxtrot = 48,

  md = 64,
  medium = 64,
  golf = 64,

  lg = 96,
  large = 96,
  hotel = 96,

  xl = 128,
  extra_large = 128,
  india = 128,

  xxl = 144,
  huge = 144,
  juliett = 144,
}

export type Size = keyof typeof SizeMap | number;

export function getSize(size: Size = "tiny"): number {
  return typeof size === "string" ? SizeMap[size] : size;
}
