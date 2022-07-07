import months from '../data/months';
import {Comic} from '../types/types';

/**
 * @param comicsByYr  all comics in a specific year
 * @param mo a month string eg "jun"
 * @returns comics for the specified month
 */
const filterByMonth = (comicsByYr:Comic[], mo:string):Comic[] => comicsByYr.filter(
  ({ title }) => Number(title.split(".")[0]) === months.indexOf(mo) + 1
);

export default filterByMonth;