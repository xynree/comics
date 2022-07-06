import months from '../data/months';

/**
 * @param {array} comicsByYr  an array of comics for the year
 * @param {string} mo a month string eg "jun"
 * @returns {array} an array of comics for the month
 */
const comicsInMo = (comicsByYr, mo) => comicsByYr.filter(
  ({ title }) => Number(title.split(".")[0]) === months.indexOf(mo) + 1
);

export default comicsInMo;