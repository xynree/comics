import { useState } from "react";
import YearView from "./YearView";


const comicsByYear = (comics) => {
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

const Calendar = ({ comics, setActiveComic }) => {
  const [splitComics, setSplitComics] = useState(comicsByYear(comics));

  return (
    <div className="h-screen bg-[#FEFAEE] overflow-auto no-scrollbar">
      <div className="p-5 pl-10">
        {Object.keys(splitComics).slice().reverse().map((year) => (
    <YearView key={year} year={year} setActiveComic={setActiveComic} comics={splitComics[year]}/>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
