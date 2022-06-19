import DayBubble from "./DayBubble";
import { useState } from "react";

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const comicsByMonth = (comics) => {
  const map = new Map();
  comics.forEach((comic) => {
    const [mo, day] = comic.title.split(".");
    const month = months[mo-1];
    if (!map.has(month)) {
      map.set(month, [comic]);
    } else {
      map.set(month, [...map.get(month), comic]);
    }
  });

  const sortedComics = Array.from(map).reverse().map((month) => {
    const sorted = month[1].sort((prev,curr) => {
      return Number(prev.title.split('.')[1]) < Number(curr.title.split('.')[1]) ? -1:1
    })
    return [month[0], sorted]
  });
  return sortedComics
};

const YearView = ({ comics, year, setActiveComic }) => {
  const [comicsByMo, setComicsByMo] = useState(comicsByMonth(comics));
  return (
    <div className="flex flex-col" key={year}>
      <div className="YEAR">
        <div className="text-4xl mt-4 mb-4 ml-7">{year}</div>
      </div>
      <div className="MONTHS and BUBLES">
          {comicsByMo.map(([mo, comics]) => (
            <div className="flex justify-start " key={`${year}-${mo}`}>
              <div className="w-12 font-bold flex-shrink-0  right-outline pt-2 ">{mo}</div>
              <div className='bg-black w-[1px]'></div>
              <div className='flex flex-wrap ml-4 pb-5'>
              {
                comics.map((comic) => <DayBubble
                comic={comic}
                key={comic._id}
                setActiveComic={setActiveComic}
              /> )
              }
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default YearView;