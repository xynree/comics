import { Dispatch, SetStateAction, useState } from "react";
import YearView from "./YearView/YearView";
import comicsByYear from '../../helpers/comicsByYear';
import { Comic } from '../../types/types';

interface Props {
  comics: Comic[],
  setActiveComic: Dispatch<SetStateAction<Comic>>,
  comic: Comic
}
const Calendar = ({ comics, setActiveComic, comic }:Props) => {
  const [splitComics,] = useState(comicsByYear(comics));
  return (
    <div className="h-screen bg-[#FEFAEE] overflow-auto no-scrollbar">
      <div className="p-5 pl-16 pr-16">
        {Object.keys(splitComics).slice().reverse().map((year) => (
    <YearView key={year} year={year} setActiveComic={setActiveComic} comics={splitComics[year]} comic={comic}/>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
