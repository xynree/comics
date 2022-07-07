import months from "../data/months";
import { Comic } from "../types/types";

type MonthGroup = [string, Comic[]];

/**
 * @param comics Array of comics in a year
 * @returns { MonthGroup[] } sorted 2D array of comics in the year by month
 */
const comicsByMonth = (comics: Comic[]): MonthGroup[] => {
  const map = new Map();
  comics.forEach((comic) => {
    const [mo,,] = comic.title.split(".");
    const month = months[Number(mo) - 1];
    if (!map.has(month)) {
      map.set(month, [comic]);
    } else {
      map.set(month, [...map.get(month), comic]);
    }
  });
  return Array.from(map)
  .reverse()
  .map((mo) => [mo[0], mo[1]]);
};

export default comicsByMonth;
