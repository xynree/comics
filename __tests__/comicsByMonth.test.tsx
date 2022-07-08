import comicsByMonth from "../helpers/comicsByMonth";
import {two, three, four, five} from "../data/testData";

describe("comicsByMonth Transforming Function", () => {
  it("Returns an empty array if param length is 0", () => {
    expect(comicsByMonth([])).toEqual([]);
  });

  it("Returns a reversed 2D array by month", () => {
    expect(comicsByMonth([three, four, two])).toEqual([
      ["jan", [two]],
      ["jul", [four]],
      ["jun", [three]],
    ]);

    expect(comicsByMonth([five, two])).toEqual([
      ["jan", [two]],
      ["jul", [five]],
    ]);
  });
});
