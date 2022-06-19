export default (comics) => {
  const map = new Map();
  comics
    .forEach((comic) => {
      const [,,yr] = comic.title.split('.')
      if (!map.has(yr)) {
        map.set(yr, [comic]);
      } else {
        map.set(yr, [...map.get(yr), comic]);
      }
    });
  return Object.fromEntries(map);
};