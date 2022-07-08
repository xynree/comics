import { Comic } from "../types/types";


/** Formula for sorting comics */
const singleSort = (prev:Comic,curr:Comic) => {
  let p = (prev.title.split('.')).map((num)=>Number(num))

  let pYr = p.pop()
  p.unshift(pYr);

  let c = (curr.title.split('.')).map((num)=>Number(num))
  let cYr = c.pop()
  c.unshift(cYr);

  for (let i= 0; i<3; i++) {
    if (p[i] < c[i]) return -1;
    else if (p[i] > c[i]) return 1;
  }
  return -1;
}

/** Base case for Merge Sort */
function merge (left:any[], right:any[]):any[] {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (singleSort(left[leftIndex],right[rightIndex]) < 0 ) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

/** Recursive merge sort algo */
const mergeSort = (arr:any[]):any[] => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

/**
 * @param comics Full list of comics
 * @returns Full list of comics sorted by month and year.
*/
const comics_sorter = (comics: Comic[]) =>{

  return mergeSort(comics);

};

export default comics_sorter;