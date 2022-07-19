import { Comic } from '@types';

type Years = {[year: string]: Comic[]}

/**
 * @param comics Complete list of comics
 * @returns comics indexed by year
 */
 export const comicsByYear = (comics:Comic[]):Years => {
  if (comics.length === 0) return {};
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
