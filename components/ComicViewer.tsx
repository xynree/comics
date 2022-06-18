import { getSrcFromImg } from "../cms/imageHelpers";

const { container, comicTitle, comicView, comicDesc} = {
  container: "flex flex-col gap-4 overflow-auto no-scrollbar",
  comicTitle: "text-4xl p-6 text-center tracking-widest",
  comicView: "w-75 m-auto flex flex-col gap-4",
  comicDesc: 'text-center text-1xl'
};

const ComicViewer = ({ comic }) => {
  const { images, title, description } = comic;

  return (
    <div className={container}>
      <div className={comicTitle}>{title}</div>
      <div className={comicView}>
        {images?.map((image) => (
          <img key={image._key} src={getSrcFromImg(image)} width={400} />
        ))}
        {description && <p className={comicDesc}>{description}</p>}
      </div>
    </div>
  );
};

export default ComicViewer;
