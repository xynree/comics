import DayBubble from "./DayBubble";
import comicsByMonth from "../../../helpers/comicsByMonth";
import filterByMonth from "../../../helpers/filterByMonth";
import { Dispatch, SetStateAction } from "react";
import { Comic } from "../../../types/types";
import { monthsType } from "../../../data/months";
import { useState } from 'react';

interface Props {
  comics: Comic[],
  year: string,
  setActiveComic: Dispatch<SetStateAction<Comic>>,
  comic
}
const YearView = ({ comics, year, setActiveComic, comic }:Props) => {
  const [comicsSorted,] = useState(comicsByMonth(comics))
  const navigateToYr = () => setActiveComic(comics[0]);

  const navigateToMo = (mo:monthsType) => setActiveComic(filterByMonth(comics, mo)[0]);

  return (
    <div className="flex flex-col" key={year}>
      <div>
        <button
          className="text-4xl mt-4 mb-4 ml-7 hover:text-red-300 transition-all"
          onClick={navigateToYr}
        >
          {year}
        </button>
      </div>
      <div>
        {comicsSorted.map(([mo, comics]:[monthsType, Comic[]]) => (
          <div className="flex justify-start " key={`${year}-${mo}`}>
            <button
              className="w-12 font-bold flex-shrink-0  right-outline pt-2 hover:text-red-300 transition-all"
              onClick={() => navigateToMo(mo)}
            >
              {mo}
            </button>
            <div className="bg-black w-[1px]"></div>
            <div className="flex flex-wrap ml-4 mb-2 mt-2 items-center">
              {comics.map((eachComic) => (
                <DayBubble
                  selectedComic={comic}
                  comic={eachComic}
                  key={eachComic._id}
                  setActiveComic={setActiveComic}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearView;
