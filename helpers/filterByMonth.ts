import { Comic, Months } from "@types";
import { months } from "@data"

/**
 * @param comicsByYr  all comics in a specific year
 * @param mo a month string
 * @returns comics for the specified month
 */
export const filterByMonth = (comicsByYr: Comic[], mo: Months): Comic[] => {
  if (!mo || !comicsByYr || !~months.indexOf(mo)) return [];
  return comicsByYr.filter(
    ({ title }) => Number(title.split(".")[0]) === months.indexOf(mo) + 1
  );
};
