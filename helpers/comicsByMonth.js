import months from './months';

 const comicsByMonth = (comics) => {
  const map = new Map();
  comics.forEach((comic) => {
    const [mo, day] = comic.title.split(".");
    const month = months[mo-1];
    if (!map.has(month)) {
      map.set(month, [comic]);
    } else {
      map.set(month, [...map.get(month), comic]);
    }
  });
  const sortedComics = Array.from(map).reverse().map((month) => {
    const sorted = month[1].sort((prev,curr) => {
      return Number(prev.title.split('.')[1]) < Number(curr.title.split('.')[1]) ? -1:1
    })
    return [month[0], sorted]
  });
  return sortedComics
};

export default comicsByMonth;