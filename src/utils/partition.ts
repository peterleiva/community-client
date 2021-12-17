type PartitionTuple<T> = [T[], T[]];

export default function partition<T>(
  array: T[],
  predicate: (partition: PartitionTuple<T>, current: T) => boolean
): PartitionTuple<T> {
  return array.reduce<PartitionTuple<T>>(
    (prev, current) => {
      const [first, second] = prev;

      if (predicate(prev, current)) {
        first.push(current);
      } else {
        second.push(current);
      }

      return [first, second];
    },
    [[], []]
  );
}
