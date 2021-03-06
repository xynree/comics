import ComicViewer from "./ComicViewer/ComicViewer";
import Calendar from "./Calendar/Calendar";
import { useState, useEffect } from "react";
import { Comic } from "../types/types";

interface Props {
  comics: Comic[];
}

const Main = ({ comics }: Props) => {
  const [comic, setActiveComic] = useState(comics[comics.length - 1]);
  const [hasNavigate, setHasNavigate] = useState([null,null])
  
  useEffect(()=> {
    const foundComicIndex = comics.findIndex(
      (comicDir) => comicDir._id === comic._id
    );
    setHasNavigate([comics[foundComicIndex -1],comics[foundComicIndex +1]]);
  },[comics, comic])

  const navigate = [
    (): void => {
      if (hasNavigate[0]) return setActiveComic(hasNavigate[0]);
    },
    (): void => {
      return setActiveComic(comics[comics.length - 1]);
    },
    (): void => {
      if (hasNavigate[1]) return setActiveComic(hasNavigate[1]);
    },
  ];

  return (
    <main className="flex flex-col md:flex-row w-screen h-screen font-nw-bold">
      <div className="w-full h-screen overflow-auto no-scrollbar bg-[#FEFAEE] md:w-2/3 md:h-full md:bg-white">
        {comic && <ComicViewer comic={comic} navigate={navigate} hasNavigate={hasNavigate} />}
      </div>
      <div className="hidden md:block md:w-1/3 md:h-full">
        <Calendar comics={comics} setActiveComic={setActiveComic} comic={comic} />
      </div>
    </main>
  );
};

export default Main;
