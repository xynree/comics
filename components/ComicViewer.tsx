import { getSrcFromImg } from "../cms/imageHelpers";
import {useEffect } from 'react';
import { useRouter } from 'next/router';

const { container, comicTitle, comicView, comicDesc, comicStyle} = {
  container: "flex h-full flex-col gap-4 overflow-auto no-scrollbar",
  comicTitle: "text-4xl p-3 text-center tracking-widest",
  comicView: "w-75 m-auto flex flex-col gap-4 p-2",
  comicDesc: 'text-center text-1xl',
  comicStyle: 'shadow-xl'
};

const ComicViewer = ({ comic }) => {
  const { images, title, description } = comic;


  return (
    <div className={container}>
      <div className={comicTitle}>{title}</div>
      <div className={comicView}>
        {images?.map((image) => (
          <img key={image._key} src={getSrcFromImg(image)} width={500} className={comicStyle} />
        ))}
        {description && <p className={comicDesc}>{description}</p>}
      </div>
    </div>
  );
};

export default ComicViewer;
