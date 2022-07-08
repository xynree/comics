import filterByMonth from "../helpers/filterByMonth";
import { one, two, three, four, five, six } from "../data/testData";

describe("filterByMonth Function", () => {
  it("Returns an empty array if either parameter is missing or invalid", () => {
    expect(filterByMonth([{ invalid: "invalid" }])).toEqual([]);
    expect(filterByMonth([], "jun")).toEqual([]);
    expect(filterByMonth("jun")).toEqual([]);
  });

  it("Returns an empty array if passed in an invalid month", () => {
    expect(filterByMonth([one, two, three], "bell")).toEqual([]);
    expect(filterByMonth([one, two], "sep")).toEqual([]);
  });

  it("Returns only comics from the month passed in", () => {
    expect(filterByMonth([one, two, three, four], 'jul' )).toEqual([four])
    expect(filterByMonth([one, two, three, four], 'jan' )).toEqual([two])
    expect(filterByMonth([one, two, three, four, five], 'jul' )).toEqual([four,five])
  });
});
