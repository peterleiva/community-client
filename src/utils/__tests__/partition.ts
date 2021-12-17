import partition from "../partition";

describe("partition", () => {
  const alwaysFalse = jest.fn(() => false);
  const alwaysTrue = jest.fn(() => true);
  const list = [1, 2, 3, 4];

  test("empty array gives empty tuple", () => {
    expect(partition([], jest.fn())).toStrictEqual([[], []]);
  });

  test("predicate always true separate all to first group", () => {
    expect(partition(list, alwaysTrue)).toStrictEqual([list, []]);
  });

  test("predicate always false separate all to second group", () => {
    expect(partition(list, alwaysFalse)).toStrictEqual([[], list]);
  });
});
