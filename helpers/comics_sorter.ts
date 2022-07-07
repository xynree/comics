import { Comic } from "../types/types";

/**
 * @param comics Full list of comics
 * @returns Full list of comics sorted by month and year.
 */
const comics_sorter = (comics: Comic[]) =>
  comics.sort((prev, curr) => {
    let prevArr = prev.title.split(".");
    prevArr.unshift(prevArr[1]);
    prevArr.splice(2, 1);
    let currArr = curr.title.split(".");
    currArr.unshift(currArr[1]);
    currArr.splice(2, 1);

    for (let i = 2; i >= 0; i--) {
      if (prevArr[i] < currArr[i]) return -1;
      if (prevArr[i] > currArr[i]) return 1;
    }
});

export default comics_sorter;
