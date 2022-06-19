import { getSrcFromImg } from "../../cms/imageHelpers";
import About from '../About'
import NavigationBtns from "./NavigationBtns";

const { container, comicTitle, comicView, comicDesc, comicStyle} = {
  container:
    "flex h-full pt-10 pb-12 flex-col justify-between gap-6 ",
  comicTitle: "text-3xl text-center [letter-spacing:25px]",
  comicView: "w-4/5 h-auto xl:w-3/5  m-auto flex flex-col justify-start items-center gap-4 p-2",
  comicDesc: "text-center font-nw-thin text-sm",
  comicStyle: "shadow-xl w-full h-auto rounded-lg",
};

const ComicViewer = ({ comic, navigate }) => {
  const { images, title, description } = comic;

  return (
    <div className={container}>
      <div className={comicTitle}>{title}</div>
      <div className={comicView}>
        <NavigationBtns navigate={navigate} />
        {images?.map((image) => (
          <img
            key={image._key}
            src={getSrcFromImg(image)}
            className={comicStyle}

          />
        ))}
      </div>
      {description && <p className={comicDesc}>{description}</p>}
     {images && <About />}

    </div>
  );
};

export default ComicViewer;
