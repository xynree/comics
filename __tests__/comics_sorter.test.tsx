import comics_sorter from "../helpers/comics_sorter";
import { one, two, three, four, five} from '../data/testData';

describe("Comics Sorting Function", () => {
  it("Returns same array if arr.length == 0 or 1", () => {
    expect(comics_sorter([])).toEqual([]);
    expect(comics_sorter([one])).toEqual([one]);
    expect(comics_sorter([two])).toEqual([two]);
    expect(comics_sorter([five])).toEqual([five]);
  });

  it("Returns a sorted group of comics by year, month, and then day", () => {
    expect(comics_sorter([four, two, one, three])).toEqual([one, two, three, four]);
    expect(comics_sorter([three, four, two])).toEqual([two, three, four]);
    expect(comics_sorter([five, one, two])).toEqual([one, two, five]);
  });

  it("Will sort identical title dates in place", () => {
    expect(comics_sorter([four, two, one, three, five])).toEqual([one, two, three, four, five]);
    expect(comics_sorter([five, four, two, three, one])).toEqual([
      one,
      two,
      three,
      five,
      four,
    ]);
  });
});
