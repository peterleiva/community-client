type Partitions<T> = [T[], T[]];
interface Predicate<T> {
  (partitions: Partitions<T>, current: T): boolean;
}

function partition<T>(array: T[], predicate: Predicate<T>): Partitions<T> {
  return array.reduce<Partitions<T>>(
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

export default partition;
