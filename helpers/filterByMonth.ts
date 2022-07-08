import months, {monthsType} from '../data/months';
import {Comic} from '../types/types';

/**
 * @param comicsByYr  all comics in a specific year
 * @param mo a month string 
 * @returns comics for the specified month
 */
const filterByMonth = (comicsByYr:Comic[], mo:monthsType):Comic[] => {
  if (!mo || !comicsByYr || !~months.indexOf(mo)) return [];
  return comicsByYr.filter(
  ({ title }) => Number(title.split(".")[0]) === months.indexOf(mo) + 1
);
}

export default filterByMonth;