import ComicViewer from "./ComicViewer";
import Calendar from "./Calendar";
import { useState } from "react";
import { Comic } from "../types/types";

interface Props {
  comics: Comic[];
}

const Main = ({ comics }: Props) => {
  const [comic, setActiveComic] = useState(comics[comics.length - 1]);
  const navigate = [
    (): void => {
      const foundComicIndex = comics.findIndex(
        (comicDir) => comicDir._id === comic._id
      );
      if (foundComicIndex && comics[foundComicIndex - 1])
        return setActiveComic(comics[foundComicIndex - 1]);
    },
    (): void => {
      return setActiveComic(comics[comics.length - 1]);
    },
    (): void => {
      const foundComicIndex = comics.findIndex(
        (comicDir) => comicDir._id === comic._id
      );
      if (foundComicIndex < comics.length-1 && comics[foundComicIndex + 1])
        return setActiveComic(comics[foundComicIndex + 1]);
    },
  ];

  return (
    <main className="flex flex-col md:flex-row w-screen h-screen font-nw-bold">
      <div className="w-full h-screen overflow-auto no-scrollbar bg-[#FEFAEE] md:w-2/3 md:h-full md:bg-white">
        {comic && <ComicViewer comic={comic} navigate={navigate} />}
      </div>
      <div className="hidden md:block md:w-1/3 md:h-full">
        <Calendar comics={comics} setActiveComic={setActiveComic} />
      </div>
    </main>
  );
};

export default Main;
