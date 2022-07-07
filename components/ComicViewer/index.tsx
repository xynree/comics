import { getSrcFromImg } from "../../cms/imageHelpers";
import About from "../About";
import NavigationBtns from "./NavigationBtns";

const { container, comicTitle, comicView, comicDesc, comicStyle } = {
  container: "flex h-full pt-10 flex-col justify-between gap-6 ",
  comicTitle: "text-3xl text-center [letter-spacing:25px]",
  comicView:
    "w-full md:w-4/5 transition-all h-auto xl:w-3/5  m-auto flex flex-col justify-start items-center gap-4",
  comicDesc: "text-center text-sm p-4  font-nw",
  comicStyle: "shadow-xl w-full h-auto md:rounded-lg",
};

const ComicViewer = ({ comic, navigate }) => {
  const { images, title, description } = comic;

  return (
    <div className={container}>
      <div className={comicTitle}>{title}</div>
      <div className={comicView}>
        <NavigationBtns navigate={navigate} />
        {images?.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image._key}
            alt={title}
            src={getSrcFromImg(image)}
            className={comicStyle}
          />
        ))}
        {description && <p className={comicDesc}>{description}</p>}
      </div>
      {images && <About />}
    </div>
  );
};

export default ComicViewer;
