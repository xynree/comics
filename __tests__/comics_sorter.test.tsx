import comics_sorter from "../helpers/comics_sorter";
import { one, two, three, four, five, sample} from '../data/testData';

describe("Comics Sorting Function", () => {
  it("Returns same array if arr.length == 0 or 1", () => {
    expect(comics_sorter(sample[0])).toEqual(sample[0]);
    expect(comics_sorter(sample[1])).toEqual(sample[1]);
    expect(comics_sorter([two])).toEqual([two]);
    expect(comics_sorter([five])).toEqual([five]);
  });

  it("Returns a sorted group of comics by year, month, and then day", () => {
    expect(comics_sorter(sample[2])).toEqual([one, two, three, four]);
    expect(comics_sorter([three, four, two])).toEqual([two, three, four]);
    expect(comics_sorter([five, one, two])).toEqual([one, two, five]);
  });

  it("Will sort identical title dates in place", () => {
    expect(comics_sorter(sample[3])).toEqual([one, two, three, four, five]);
    expect(comics_sorter([five, four, two, three, one])).toEqual([
      one,
      two,
      three,
      five,
      four,
    ]);
  });
});
