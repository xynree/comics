import { Comic } from '../types/types';

type Years = {[year: string]: Comic[]}

/**
 * @param comics Complete list of comics
 * @returns comics indexed by year
 */
const comicsByYear = (comics:Comic[]):Years => {
  const map = new Map();
  comics
    .forEach((comic) => {
      const [,,yr] = comic.title.split('.')
      if (!map.has(yr)) {
        map.set(yr, [comic]);
      } else {
        map.set(yr, [...map.get(yr), comic]);
      }
    });
  return Object.fromEntries(map);
};

export default comicsByYear;