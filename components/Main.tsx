import ComicViewer from './ComicViewer';
import Calendar from './Calendar';
import { useState } from 'react'

const Main = ({comics}) => {
  const [comic, setComic] = useState(comics[comics.length-1])

  return (
    <main className="flex flex-col md:flex-row w-screen h-screen">
      <div className="w-full bg-amber-50 md:w-2/3 md:h-full md:bg-white ">
        {comic && <ComicViewer comic={comic} />}
      </div>
      <div className="hidden md:block md:w-1/3 md:h-full">
        <Calendar comics={comics} />
      </div>
    </main>
  );
};

export default Main;
