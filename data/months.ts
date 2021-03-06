const tuple = <month extends string[]>(...args: month) => args;
export type monthsType = typeof months[number];

const months = tuple(
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
);

export default months;